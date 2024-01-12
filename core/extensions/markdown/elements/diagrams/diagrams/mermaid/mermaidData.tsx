export const startMermaid = `sequenceDiagram
	Alice->>+John: Hello John, how are you?
	Alice->>+John: John, can you hear me?
	John-->>-Alice: Hi Alice, I can hear you!
	John-->>-Alice: I feel great!`;

export const mermaidTooltipText = "Диаграмма mermaid";
export const mermaidIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16px"
		height="16px"
		viewBox="0 0 491 491"
		version="1.1"
		style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}
	>
		<path
			d="M490.16,84.61C490.16,37.912 452.248,0 405.55,0L84.61,0C37.912,0 0,37.912 0,84.61L0,405.55C0,452.248 37.912,490.16 84.61,490.16L405.55,490.16C452.248,490.16 490.16,452.248 490.16,405.55L490.16,84.61Z"
			style={{ fill: "rgb(255,54,112)" }}
		/>
		<path
			d="M407.48,111.18C335.587,108.103 269.573,152.338 245.08,220C220.587,152.338 154.573,108.103 82.68,111.18C80.285,168.229 107.577,222.632 154.74,254.82C178.908,271.419 193.35,298.951 193.27,328.27L193.27,379.13L296.9,379.13L296.9,328.27C296.816,298.953 311.255,271.42 335.42,254.82C382.596,222.644 409.892,168.233 407.48,111.18Z"
			style={{ fill: "white", fillRule: "nonzero" }}
		/>
	</svg>
);
