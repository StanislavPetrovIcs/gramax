// в tauri заменяем его на TauriFs(tauri/vite.comfig.ts)
import fs from "fs-extra";
import { ItemStatus } from "../../../extensions/Watchers/model/ItemStatus";
import Watcher from "../../../extensions/Watchers/model/Watcher";
import { ItemRef } from "../../FileStructue/Item/Item";
import Path from "../Path/Path";
import FileInfo from "../model/FileInfo";
import FileProvider from "../model/FileProvider";

export default class DiskFileProvider implements FileProvider {
	private _rootPath: Path;

	constructor(rootPath: Path | string, private _watcher?: Watcher) {
		if (typeof rootPath === "string") this._rootPath = new Path(rootPath);
		else this._rootPath = rootPath;
		_watcher?.init(this);
	}

	get storageId(): string {
		return `Disk@${this._rootPath.value}`;
	}

	get rootPath(): Path {
		return this._rootPath;
	}

	getItemRef(path: Path): ItemRef {
		return { path, storageId: this.storageId };
	}

	async getItems(path: Path): Promise<FileInfo[]> {
		try {
			const files = await fs.readdir(this._toAbsolute(path));
			return (
				await Promise.all(
					files.map(async (name): Promise<FileInfo> => {
						const itemPath = path.join(new Path(name));
						try {
							return await this.getStat(itemPath, true);
						} catch {}
					}),
				)
			).filter((u) => u);
		} catch {
			return [];
		}
	}

	async isFolder(path: Path): Promise<boolean> {
		if (!(await this.exists(path))) return false;
		return await fs.lstat(this._toAbsolute(path)).then((stat) => {
			return stat.isDirectory();
		});
	}

	exists(uri: Path) {
		return fs.exists(this._toAbsolute(uri));
	}

	async getStat(path: Path, lstat = false): Promise<FileInfo> {
		const stats = lstat ? await fs.lstat(this._toAbsolute(path)) : await fs.stat(this._toAbsolute(path));
		if (!stats) return null;
		return Object.assign(stats, {
			type: (stats.isFile() ? "file" : "dir") as any,
			path: path,
			name: path.nameWithExtension,
		} as FileInfo);
	}

	async delete(path: Path) {
		if (await this.isFolder(path)) await this._deleteFolder(path);
		else await this._deleteFile(path);
	}

	async write(path: Path, data: string | Buffer) {
		this._watcher?.stop();
		const absolutePath = this._toAbsolute(path);
		if (await this.exists(path)) await fs.writeFile(absolutePath, data, "utf-8");
		else {
			await fs.mkdir(this._toAbsolute(path.parentDirectoryPath), { recursive: true });
			await fs.writeFile(absolutePath, data, { encoding: "utf-8", flag: "wx" });
		}
		this._watcher?.start();
	}

	async move(from: Path, to: Path) {
		await fs.move(this._toAbsolute(from), this._toAbsolute(to));
	}

	async copy(from: Path, to: Path) {
		if (await this.isFolder(from)) await this._copyFolder(from, to);
		else await this._copyFile(from, to);
	}

	async mkdir(path: Path, mode?: number) {
		this._watcher?.stop();
		const absolutPath = this._toAbsolute(path);
		if (!(await this.exists(path))) await fs.mkdir(absolutPath, { recursive: true, mode });
		this._watcher?.start();
	}

	async read(path: Path): Promise<string> {
		if (await this.exists(path))
			return (await fs.readFile(this._toAbsolute(path), { encoding: "utf-8" })).toString();
		return null;
	}

	async readAsBinary(path: Path): Promise<Buffer> {
		if (await this.exists(path)) return fs.readFile(this._toAbsolute(path));
		return null;
	}

	async readdir(path: Path): Promise<string[]> {
		if (await this.exists(path)) return fs.readdir(this._toAbsolute(path));
	}

	async readlink(path: Path): Promise<string> {
		if (await this.exists(path)) return fs.readlink(this._toAbsolute(path));
	}

	async symlink(target: Path, path: Path): Promise<void> {
		if (!(await this.exists(path))) return;
		await fs.symlink(this._toAbsolute(target), this._toAbsolute(path));
	}

	async deleteEmptyFolders(folderPath: Path) {
		const items = await this.getItems(folderPath);
		await Promise.all(
			items.map(async (item) => {
				if (item.isDirectory()) {
					if (await this._isEmptyFolder(item.path)) await this.delete(item.path);
					else await this.deleteEmptyFolders(item.path);
				}
			}),
		);
	}

	watch(callback: (changeItems: ItemStatus[]) => void) {
		this._watcher?.watch(callback);
	}

	stopWatch() {
		this._watcher?.stop();
	}

	startWatch() {
		this._watcher?.start();
	}

	async validate() {
		if (!(await this.exists(Path.empty)))
			throw new Error(
				`Корневая директория ${this._rootPath} не существует.\nВозможно вы ее удалили или переименовали. Укажите новую директорию.`,
			);
	}

	private async _deleteFile(path: Path) {
		if (!(await this.exists(path))) return;
		this._watcher?.stop();
		await fs.unlink(this._toAbsolute(path));
		this._watcher?.start();
	}

	private async _deleteFolder(uri: Path) {
		const path = this._toAbsolute(uri);
		if (!(await fs.exists(path))) return;
		this._watcher?.stop();
		await fs.rm(path, { recursive: true, force: true });
		this._watcher?.start();
	}

	private async _copyFolder(oldPath: Path, newPath: Path) {
		this._watcher?.stop();
		await fs.copy(this._toAbsolute(oldPath), this._toAbsolute(newPath));
		this._watcher?.start();
	}

	private async _copyFile(oldFilePath: Path, newFilePath: Path) {
		this._watcher?.stop();
		const content = await this.read(oldFilePath);
		if (!(await this.exists(oldFilePath))) return;
		await this.write(newFilePath, content);
		this._watcher?.start();
	}

	private async _isEmptyFolder(path: Path) {
		if (await this.exists(path)) return (await this.readdir(path)).length === 0;
	}

	private _toAbsolute(path: Path): string {
		return this._rootPath.join(path).value;
	}
}
