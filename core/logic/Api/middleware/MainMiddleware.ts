import { applyCors } from "@components/libs/cors";
import ApiRequest from "../ApiRequest";
import ApiResponse from "../ApiResponse";
import { apiUtils } from "../apiUtils";
import Middleware from "./Middleware";

export class MainMiddleware extends Middleware {
	constructor() {
		super();
	}

	async Process(req: ApiRequest, res: ApiResponse): Promise<void> {
		await applyCors(req, res);
		res.statusCode = 200;
		const ctx = this._app.contextFactory.from(req, res, req.query);
		try {
			await this._next.Process(req, res);
		} catch (e) {
			apiUtils.sendError(res, e);
			this._app.logger.logError(e, ctx?.user?.info);
		}
	}
}
