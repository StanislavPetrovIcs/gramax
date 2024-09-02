import styled from "@emotion/styled";
import t from "@ext/localization/locale/translate";
import { FocusPositionContext } from "@ext/markdown/core/edit/components/ContextWrapper";
import TabAttrs from "@ext/markdown/elements/tabs/model/TabAttrs";
import Tabs from "@ext/markdown/elements/tabs/render/component/Tabs";
import { TextSelection } from "@tiptap/pm/state";
import { NodeViewContent, NodeViewProps, NodeViewWrapper } from "@tiptap/react";
import { ReactElement, useCallback, useContext, useEffect, useState } from "react";

const EditTabs = (props: { className?: string } & NodeViewProps): ReactElement => {
	const { node, editor, className, getPos, updateAttributes } = props;
	const tabText = t("editor.tabs.name");
	const position = useContext(FocusPositionContext);
	const [activeHoverStyle, setActiveHoverStyle] = useState(false);

	useEffect(() => {
		const from = getPos();
		const to = getPos() + node.nodeSize;
		setActiveHoverStyle(from < position && position < to);
	}, [position]);

	const onNameUpdate = useCallback(
		(value: string, idx: number) => {
			const childAttrs: TabAttrs[] = node.attrs.childAttrs.map((a) => ({ ...a }));
			childAttrs[idx].name = value.replace("\n", "");
			updateAttributes({ childAttrs });
		},
		[node],
	);

	const onAddClick = useCallback(() => {
		const childAttrs = node.attrs.childAttrs.map((a) => ({ ...a }));
		const attrs = { name: tabText, idx: node.attrs.childAttrs.length };
		childAttrs.push(attrs);

		const position =
			getPos() + node.nodeSize > editor.state.doc.content.size
				? editor.state.doc.content.size
				: getPos() + node.nodeSize - 1;

		editor.chain().focus(position).setTab(position, attrs).updateAttributes(node.type, { childAttrs }).run();
	}, [node]);

	const onTabEnter = (idx: number) => {
		let offset = 1;
		const child = node.child(idx);
		node.forEach((c, o) => {
			if (c == child) offset = o;
		});
		editor.commands.focus(getPos() + offset + child.nodeSize);
	};

	const updateChildAttrs = (removeIdx: number, childAttrs: TabAttrs[]) => {
		const tr = editor.view.state.tr;
		tr.setNodeAttribute(getPos(), "childAttrs", childAttrs);

		let childPos = getPos() + 1;
		let offset = 0;
		for (let i = 0; i < node.childCount; i++) {
			const child = node.child(i);
			if (i === removeIdx) {
				tr.delete(childPos, childPos + child.nodeSize);
				offset += 1;
			} else {
				tr.setNodeAttribute(childPos, "idx", i === 0 ? 0 : i - offset);
				childPos += child.nodeSize;
			}
		}

		const firstChild = tr.doc.resolve(getPos() + 1);
		const position = getPos() + firstChild.parent.nodeSize;

		tr.setSelection(TextSelection.create(tr.doc, position));
		editor.view.dispatch(tr);
	};

	const onRemoveClick = useCallback(
		(removeIdx: number) => {
			const childAttrs: TabAttrs[] = node.attrs.childAttrs
				.map((a) => ({ ...a }))
				.filter((a) => a.idx !== removeIdx);
			childAttrs.forEach((attrs, idx) => (attrs.idx = idx));

			if (childAttrs.length === 0) editor.commands.deleteRange({ from: getPos(), to: getPos() + node.nodeSize });
			else updateChildAttrs(removeIdx, childAttrs);
		},
		[node],
	);

	return (
		<NodeViewWrapper>
			<Tabs
				isEdit
				onTabEnter={onTabEnter}
				onAddClick={onAddClick}
				onNameUpdate={onNameUpdate}
				onRemoveClick={onRemoveClick}
				childAttrs={node.attrs.childAttrs}
				className={`${className} ${activeHoverStyle ? "hover" : ""}`}
			>
				<NodeViewContent className="content" />
			</Tabs>
		</NodeViewWrapper>
	);
};

export default styled(EditTabs)`
	padding: 4px 8px;
	margin: -4px -8px;
	border: 1px dashed #ffffff0f;

	&.no-hover:hover {
		border: 1px dashed #ffffff0f;
	}

	:hover,
	&.hover {
		border-radius: var(--radius-medium);
		border: 1px dashed var(--color-line);
	}
`;
