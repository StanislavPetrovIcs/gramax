import Context from "@core/Context/Context";
import PageDataContext from "@core/Context/PageDataContext";
import { Article } from "@core/FileStructue/Article/Article";
import { ArticleData, OpenGraphData } from "@core/SitePresenter/SitePresenter";
import { Command } from "../../types/Command";
import getPageDataContext from "./getPageDataContext";

const getArticlePageData: Command<
	{ path: string[]; ctx: Context },
	{ data: ArticleData; openGraphData: OpenGraphData; context: PageDataContext }
> = Command.create({
	async do({ path, ctx }) {
		const { errorArticlesProvider, lib, logger, sitePresenterFactory } = this._app;
		const dataProvider = sitePresenterFactory.fromContext(ctx);
		logger.logTrace("Article: " + path.join("/"));
		let data: ArticleData;
		let openGraphData: OpenGraphData;
		try {
			data = await dataProvider.getData(path);
			openGraphData = await dataProvider.getOpenGraphData(path);
			if (!data) {
				const errorArticle = errorArticlesProvider.getErrorArticle("404");
				const catalog = await lib.getCatalog(path[0]);
				data = await dataProvider.getArticleData(errorArticle, catalog);
				openGraphData = await dataProvider.getOpenGraphData(path, errorArticle, catalog);
			}
			data.articleProps.errorCode = data.articleProps.errorCode || null;
		} catch (error) {
			logger.logError(error);
			let article: Article = null;
			try {
				article = (await dataProvider.getArticleCatalog(path))?.article ?? null;
			} catch {}
			const errorArticle = errorArticlesProvider.getErrorArticle("500", error, ctx.user.isLogged, article?.ref);
			const catalog = await lib.getCatalog(path[0]);
			data = await dataProvider.getArticleData(errorArticle, catalog);
			openGraphData = await dataProvider.getOpenGraphData(path, errorArticle, catalog);
		}

		return {
			data,
			openGraphData,
			context: getPageDataContext({
				ctx,
				app: this._app,
				isArticle: true,
				userInfo: data?.catalogProps?.userInfo,
			}),
		};
	},
});

export default getArticlePageData;
