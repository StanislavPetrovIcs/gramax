import NodeConverter from "@ext/confluence/core/cloud/model/NodeConverter";

const orderedList: NodeConverter = (orderedListNode) => {
	return {
		type: "ordered_list",
		attrs: { tight: false },
		content: orderedListNode.content,
	};
};

export default orderedList;
