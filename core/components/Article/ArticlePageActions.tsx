import SingInOut from "@components/Actions/SingInOut";
import styled from "@emotion/styled";
import ThemeToggle from "@ext/Theme/components/ThemeToggle";
import type { HTMLAttributes } from "react";

export type ArticlePageActionsProps = HTMLAttributes<HTMLDivElement>;

const ArticlePageActions = (props: ArticlePageActionsProps) => {
	return (
		<div {...props} data-qa="app-actions">
			<ThemeToggle />
			<SingInOut />
		</div>
	);
};

export default styled(ArticlePageActions)`
	display: flex;
	align-items: center;
	flex-direction: row;
	gap: var(--distance-actions);
	justify-content: space-between;
`;
