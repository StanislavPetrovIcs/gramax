import ButtonsLayout from "@components/Layouts/ButtonLayout";
import ModalLayoutDark from "@components/Layouts/ModalLayoutDark";
import styled from "@emotion/styled";
import { Editor } from "@tiptap/core";
import { cssMedia } from "@core-ui/utils/cssUtils";
import { memo } from "react";
import AnyMenuGroup from "../Groups/Any";
import HeadersMenuGroup from "../Groups/Headers";
import ListMenuGroup from "../Groups/List";
import TextMenuGroup from "../Groups/Text";
import ClearDecorationMenuButton from "@ext/markdown/elements/сlearDecoration/editor/components/ClearDecorationMenuButton";

const MainMenu = styled(({ editor, className }: { editor?: Editor; className?: string }) => {
	return (
		<div className={className}>
			<ModalLayoutDark>
				<ButtonsLayout>
					<HeadersMenuGroup editor={editor} />
					<div className="divider" />
					<TextMenuGroup editor={editor} />
					<div className="divider" />
					<ListMenuGroup editor={editor} />
					<div className="divider" />
					<AnyMenuGroup editor={editor} />
					<div className="divider" />
					<ClearDecorationMenuButton editor={editor} />
				</ButtonsLayout>
			</ModalLayoutDark>
		</div>
	);
})`
	border-radius: var(--radius-big-block);

	> div > div {
		flex-wrap: wrap;
	}

	@media only screen and (max-width: 1163px) {
		.hidden {
			display: none;
		}

		> div > div {
			max-width: 331px;
		}
	}

	${cssMedia.medium} {
		.hidden {
			display: block;
		}

		> div > div {
			max-width: fit-content;
		}
	}

	${cssMedia.narrow} {
		max-width: fit-content;

		> div > div {
			flex-wrap: nowrap;
			max-width: 95vw;
			overflow: scroll;
		}
	}
`;
export default memo(MainMenu);
