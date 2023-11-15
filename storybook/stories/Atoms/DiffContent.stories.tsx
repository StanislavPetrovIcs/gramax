import DiffContentSrc from "@components/Atoms/DiffContent";
import { FileStatus } from "@ext/Watchers/model/FileStatus";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Change } from "../../../core/extensions/VersionControl/DiffHandler/model/Change";
import InlineDecorator from "../../styles/decorators/InlineDecorator";

type Props = ComponentProps<typeof DiffContentSrc> & { content: string };

const meta: Meta<Props> = {
	title: "DocReader/Atoms/DiffContent",
	decorators: [InlineDecorator],
	args: {
		content: "New code content.",
		showDiff: true,
		isCode: true,
	},
};

export default meta;

export const DiffContent: StoryObj<Props> = {
	render: (props) => {
		const changes: Change[] = [
			{ value: "Code content. " },
			{ type: FileStatus.delete, value: "Hello, world! " },
			{ value: props.content, type: FileStatus.new },
		];
		return <DiffContentSrc {...props} changes={changes} />;
	},
};
