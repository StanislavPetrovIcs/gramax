import doc from "@ext/markdown/elements/article/edit/doc";
import blockquote from "@ext/markdown/elements/blockquote/editor/model/blockquoteSchema";
import br from "@ext/markdown/elements/br/edit/model/brSchema";
import comment from "@ext/markdown/elements/comment/edit/model/commentSchema";
import answer from "@ext/markdown/elements/comment/legacy/answer/edit/answerSchema";
import comment_old from "@ext/markdown/elements/comment/legacy/comment/commentShema";
import cut from "@ext/markdown/elements/cut/edit/model/cutSchema";
import inlineCut_component from "@ext/markdown/elements/cut/edit/model/inlineCutSchema";
import c4Diagram from "@ext/markdown/elements/diagrams/diagrams/c4Diagram/c4DiagramSchema";
import mermaid from "@ext/markdown/elements/diagrams/diagrams/mermaid/mermaidSchema";
import plantUml from "@ext/markdown/elements/diagrams/diagrams/plantUml/plantUmlSchema";
import tsDiagram from "@ext/markdown/elements/diagrams/diagrams/tsDiagram/tsDiagramSchema";
import diagrams from "@ext/markdown/elements/diagrams/edit/models/diagramsSchema";
import drawio from "@ext/markdown/elements/drawio/edit/model/drawioSchema";
import error from "@ext/markdown/elements/error/editor/model/errorSchema";
import code_block from "@ext/markdown/elements/fence/edit/model/codeBlockSchema";
import heading from "@ext/markdown/elements/heading/edit/model/headingSchema";
import horizontal_rule from "@ext/markdown/elements/hr/edit/model/hrSchema";
import image from "@ext/markdown/elements/image/edit/model/imageSchema";
import link from "@ext/markdown/elements/link/edit/model/linkSchema";
import * as listSchema from "@ext/markdown/elements/list/edit/models/listSchema";
import * as blockMd from "@ext/markdown/elements/md/model/blockMdSchema";
import inlineMd_component from "@ext/markdown/elements/md/model/inlineMdSchema";
import note from "@ext/markdown/elements/note/edit/model/noteSchema";
import paragraph from "@ext/markdown/elements/paragraph/editor/model/paragraphSchema";
import style_wrapper from "@ext/markdown/elements/styleWrapper/model/styleWrapperSchema";
import * as table_simple from "@ext/markdown/elements/table/edit/model/simpleTableSchema";
import * as table from "@ext/markdown/elements/table/edit/model/tableSchema";
import video from "@ext/markdown/elements/video/edit/model/videoSchema";
import { Schema } from "prosemirror-model";

export const schema = new Schema({
	nodes: {
		doc,

		heading,
		paragraph,
		text: { group: "inline" },

		br,
		horizontal_rule,
		hard_break: { inline: true, group: "inline", selectable: false },

		...table,
		...table_simple,
		...listSchema,

		diagrams,
		mermaid,
		"plant-uml": plantUml,
		"c4-diagram": c4Diagram,
		"ts-diagram": tsDiagram,

		video,
		image,
		drawio,

		cut,
		note,
		style_wrapper,
		code_block,
		blockquote,

		error,
		answer,
		comment_old,

		...blockMd,
		inlineMd_component,
		inlineCut_component,
	},
	marks: {
		link,
		comment,
		s: {},
		em: {},
		code: {},
		strong: {},
		inlineMd: {},
		inlineCut: { attrs: inlineCut_component.attrs },
	},
});
