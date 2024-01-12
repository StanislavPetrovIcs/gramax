import Icon from "@components/Atoms/Icon";
import Tooltip from "@components/Atoms/Tooltip";
import FetchService from "@core-ui/ApiServices/FetchService";
import ApiUrlCreatorService from "@core-ui/ContextServices/ApiUrlCreator";
import IsEditService from "@core-ui/ContextServices/IsEdit";
import { refreshPage } from "@core-ui/ContextServices/RefreshPageContext";
import styled from "@emotion/styled";
import { ItemLink } from "@ext/navigation/NavigationLinks";
import { useState, MouseEventHandler } from "react";
import { useRouter } from "../../../logic/Api/useRouter";
import useLocalize from "../../localization/useLocalize";

interface CreateArticleProps {
	item?: ItemLink;
	className?: string;
	onCreate?: () => void;
}

const CreateArticle = (props: CreateArticleProps) => {
	const { item, className, onCreate } = props;
	const [isLoading, setIsLoading] = useState(false);
	const content = useLocalize(item ? "addChildArticle" : "addArticleToRoot");
	const router = useRouter();

	const isEdit = IsEditService.value;
	const apiUrlCreator = ApiUrlCreatorService.value;
	const url = apiUrlCreator.createArticle(item ? item.ref.path : null);

	const onClickHandler: MouseEventHandler<HTMLElement> = (e) => {
		e.stopPropagation();
		FetchService.fetch(url).then(async (response) => {
			setIsLoading(false);
			if (!response.ok) return refreshPage();
			onCreate?.();
			router.pushPath("/" + (await response.text()));
		});
		setIsLoading(true);
	};

	if (!isEdit) return null;

	return (
		<Tooltip content={content} place={item ? "top" : "right"}>
			<span className={className}>
				<Icon code="plus" isAction isLoading={isLoading} onClick={onClickHandler} />
			</span>
		</Tooltip>
	);
};

export default styled(CreateArticle)`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
