import GitErrorCode from "@ext/git/core/GitRepository/errors/model/GitErrorCode";

export class LibGit2Error extends Error {
	code?: GitErrorCode;
	data?: { [key: string]: string };

	constructor(message: string, klass: number, code: number) {
		super(message);
		this.code = fromRaw(klass, code);
		this.data = makeData(this.code, message);
		console.log(this.code);
	}
}

export const fromRaw = (klass: number, code: number): GitErrorCode => {
	const eq = (targetKlass: number, targetCode: number) => targetKlass == klass && targetCode == code;

	switch (true) {
		case eq(20, 11):
		case eq(13, 20):
			return GitErrorCode.CheckoutConflictError;

		case eq(22, 22):
		case eq(22, 11):
		case eq(22, 0):
		case eq(10, 8):
		case eq(19, 20):
			return GitErrorCode.MergeConflictError;

		case eq(22, 9):
			return GitErrorCode.PushRejectedError;

		case eq(4, 4):
			return GitErrorCode.AlreadyExistsError;

		case eq(34, 16):
		case eq(34, 0):
			return GitErrorCode.HttpError;

		case eq(4, 9):
			return GitErrorCode.PushRejectedError;

		default:
			return undefined;
	}
};

export const makeData = (code: GitErrorCode, message: string): any => {
	switch (code) {
		case GitErrorCode.PushRejectedError:
			return {
				reason: "not-fast-forward",
			};

		case GitErrorCode.HttpError:
			return {
				statusCode: message,
			};

		default:
			return undefined;
	}
};
