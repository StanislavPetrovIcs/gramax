import { parse } from "@ext/markdown/elements/image/render/logic/imageTransformer";

function imageToken() {
	return {
		node: "image",
		getAttrs: (tok) => {
			const { crop, objects, scale } = parse(
				tok.attrs.crop ?? "0,0,100,100",
				tok.attrs.scale ?? null,
				tok.attrs.objects ?? "[]",
			);

			return {
				src: tok?.attrGet ? tok.attrGet("src") : tok.attrs.src,
				title: tok?.attrGet ? tok.attrGet("title") || null : tok.attrs.title,
				alt: tok.children ? (tok.children[0] && tok.children[0].content) || null : tok.attrs.alt,
				crop: crop,
				scale: scale,
				objects: objects,
			};
		},
	};
}

export default imageToken;
