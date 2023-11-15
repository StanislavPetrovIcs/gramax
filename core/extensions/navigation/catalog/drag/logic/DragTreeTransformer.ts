import { NodeModel } from "@minoru/react-dnd-treeview";
import hash from "object-hash";
import { ItemType } from "../../../../../logic/FileStructue/Item/Item";
import { CategoryLink, ItemLink } from "../../../NavigationLinks";

abstract class DragTreeTransformer {
	static getRootId() {
		return 0;
	}

	static getRenderDragNav(items: ItemLink[]): NodeModel<ItemLink>[] {
		const dragNavItems: NodeModel<ItemLink>[] = [];

		const func = (item: ItemLink, parentId?: number | string) => {
			if (item.type === ItemType.article) dragNavItems.push(this.getDragNavItem(item, false, parentId));
			else {
				const droppable = (item as CategoryLink).items.length !== 0;
				dragNavItems.push(this.getDragNavItem(item, droppable, parentId));
				if (droppable) (item as CategoryLink).items.forEach((i) => func(i, this._getNodeId(item)));
			}
		};

		items.forEach((i) => func(i, this.getRootId()));

		return dragNavItems;
	}

	static getRootItem(): NodeModel<ItemLink> {
		return {
			id: this.getRootId(),
			text: "ROOT",
			droppable: false,
			parent: null,
		};
	}

	static getDragNavItem(item: ItemLink, droppable: boolean, parent?: number | string): NodeModel<ItemLink> {
		return {
			id: this._getNodeId(item),
			text: item.title,
			droppable: droppable,
			parent: parent ?? this.getRootId(),
			data: {
				ref: item.ref,
				type: item.type,
				icon: item.icon,
				query: item.query,
				title: item.title,
				pathname: item.pathname,
				isCurrentLink: item.isCurrentLink,
				isExpanded: (item as CategoryLink)?.isExpanded ?? false,
				existContent: (item as CategoryLink)?.existContent ?? false,
			} as any,
		};
	}

	private static _getNodeId(item: ItemLink): number | string {
		return hash({ id: item.pathname + item.title });
	}
}

export default DragTreeTransformer;
