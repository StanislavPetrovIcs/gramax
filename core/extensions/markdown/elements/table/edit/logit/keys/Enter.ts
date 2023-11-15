import { Node } from "prosemirror-model";
import { selectedRect, TableRect } from "prosemirror-tables";
import KeyboardRule from "@ext/markdown/elementsUtils/keyboardShortcuts/model/KeyboardRule";
import KeyboardShortcut from "@ext/markdown/elementsUtils/keyboardShortcuts/model/KeyboardShortcut";

const quitTableOnDoubleEnder: KeyboardRule = ({ editor, node, nodePosition }) => {
	const { state } = editor;
	const { selection } = state;
	const { $from, anchor } = selection;

	const tableRect: TableRect = selectedRect(state);
	if (tableRect.map.height !== tableRect.bottom) return false;

	let cellNode: Node;
	node.content.forEach((n, offset) => {
		const pos = nodePosition + offset;
		const isCurrent = anchor >= pos && anchor < pos + n.nodeSize;
		if (isCurrent) cellNode = n;
	});

	if (!cellNode || cellNode.content.childCount < 2) return false;

	const lastText = cellNode.lastChild.textContent;

	if (lastText == "") {
		const deleteNode = editor.chain().deleteNode($from.parent.type).run();
		const addNode = editor
			.chain()
			.insertContentAt(nodePosition + node.nodeSize - 1, { type: "paragraph", content: [] })
			.run();
		return addNode && deleteNode;
	}
	return false;
};

const getEnterShortcuts = (): KeyboardShortcut => {
	return { key: "Enter", rules: [quitTableOnDoubleEnder] };
};

export default getEnterShortcuts;
