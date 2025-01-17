import OnNetworkApiErrorService from "@ext/errorHandlers/client/OnNetworkApiErrorService";
import NetworkApiError from "@ext/errorHandlers/network/NetworkApiError";
import { useEffect } from "react";
import PageDataContext from "../../../../../logic/Context/PageDataContext";
import ApiUrlCreator from "../../../../../ui-logic/ApiServices/ApiUrlCreator";
import FetchService from "../../../../../ui-logic/ApiServices/FetchService";
import ApiUrlCreatorService from "../../../../../ui-logic/ContextServices/ApiUrlCreator";
import PageDataContextService from "../../../../../ui-logic/ContextServices/PageDataContext";
import getStorageNameByData from "../../../../storage/logic/utils/getStorageNameByData";
import { makeSourceApi } from "../makeSourceApi";

const removeExpiredSources = async (
	apiUrlCreator: ApiUrlCreator,
	pageProperties: PageDataContext,
	onNetworkApiError: (error: NetworkApiError) => void,
) => {
	for (const source of pageProperties.sourceDatas) {
		const sourceApi = makeSourceApi(source, pageProperties.conf.authServiceUrl, onNetworkApiError);
		if (!sourceApi) continue;
		const sourceToRemove = await sourceApi.removeExpiredCredentials(apiUrlCreator);
		if (!sourceToRemove) continue;
		pageProperties.sourceDatas = pageProperties.sourceDatas.filter(
			(s) => getStorageNameByData(s) !== sourceToRemove,
		);
		PageDataContextService.value = { ...pageProperties };
		FetchService.fetch(apiUrlCreator.removeSourceData(sourceToRemove));
	}
};

const useRemoveExpiredSources = (isFirstLoad: boolean) => {
	const apiUrlCreator = ApiUrlCreatorService.value;
	const pageProperties = PageDataContextService.value;
	const onNetworkApiError = OnNetworkApiErrorService.value;

	useEffect(() => {
		if (!isFirstLoad) return;
		removeExpiredSources(apiUrlCreator, pageProperties, onNetworkApiError);
	}, [isFirstLoad]);
};

export default useRemoveExpiredSources;
