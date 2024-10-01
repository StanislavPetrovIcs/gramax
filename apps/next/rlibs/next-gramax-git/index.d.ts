export interface AccessTokenCreds {
  authorName: string
  authorEmail: string
  accessToken: string
}
export interface CloneOptions {
  branch: string | null
  depth: number | null
  url: string
  to: string
}
export declare function init_new(path: string, creds: AccessTokenCreds): Output
export declare function clone(creds: AccessTokenCreds, opts: CloneOptions, callback: (...args: any[]) => any): Output
export declare function status(repoPath: string): Output
export declare function status_file(repoPath: string, path: string): Output
export declare function branch_list(repoPath: string): Output
export declare function branch_info(repoPath: string, name?: string | undefined | null): Output
export declare function new_branch(repoPath: string, name: string): Output
export declare function delete_branch(repoPath: string, creds: AccessTokenCreds | undefined | null, name: string, remote: boolean): Output
export declare function checkout(repoPath: string, branch: string, create: boolean): Output
export declare function add_remote(repoPath: string, name: string, url: string): Output
export declare function has_remotes(repoPath: string): Output
export declare function get_remote(repoPath: string): Output
export declare function fetch(repoPath: string, creds: AccessTokenCreds): Output
export declare function push(repoPath: string, creds: AccessTokenCreds): Output
export declare function file_history(repoPath: string, filePath: string, count: number): Output
export declare function add(repoPath: string, paths: Array<string>): Output
export declare function commit(repoPath: string, creds: AccessTokenCreds, message: string, parents?: Array<string> | undefined | null): Output
export declare function diff(repoPath: string, oldOid: string, newOid: string): Output
export declare function restore(repoPath: string, staged: boolean, paths: Array<string>): Output
export declare function reset_all(repoPath: string, hard: boolean, head?: string | undefined | null): Output
export declare function stash(repoPath: string, creds: AccessTokenCreds, message?: string | undefined | null): Output
export declare function stash_apply(repoPath: string, oid: string): Output
export declare function stash_delete(repoPath: string, oid: string): Output
export declare function merge(repoPath: string, creds: AccessTokenCreds, theirs: string): Output
export declare function graph_head_upstream_files(repoPath: string, searchIn: string): Output
export declare function get_content(repoPath: string, path: string, oid?: string | undefined | null): Output
export declare function get_parent(repoPath: string, oid: string): Output
