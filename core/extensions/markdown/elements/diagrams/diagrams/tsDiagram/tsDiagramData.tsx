export const startTsDiagram = `interface DocReader {
	catalogs: Catalog[];
}

interface Catalog {
	articles: Article[];
}

interface Article {
	itle: string;
	content: string;
}
`;

export const tsDiagramTooltipText = "TS-Диаграмма";
export const tsDiagramIcon = (
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g clipPath="url(#clip0_2_18)">
			<path
				d="M13.3646 1.33333H2.63542C1.91629 1.33333 1.33333 1.9163 1.33333 2.63542V13.3646C1.33333 14.0837 1.91629 14.6667 2.63542 14.6667H13.3646C14.0837 14.6667 14.6667 14.0837 14.6667 13.3646V2.63542C14.6667 1.9163 14.0837 1.33333 13.3646 1.33333Z"
				fill="#3178C6"
			/>
			<path
				d="M13.3646 1.33333H2.63542C1.91629 1.33333 1.33333 1.9163 1.33333 2.63542V13.3646C1.33333 14.0837 1.91629 14.6667 2.63542 14.6667H13.3646C14.0837 14.6667 14.6667 14.0837 14.6667 13.3646V2.63542C14.6667 1.9163 14.0837 1.33333 13.3646 1.33333Z"
				fill="#3178C6"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M9.58695 11.9433V13.247C9.79888 13.3557 10.0495 13.4371 10.3389 13.4914C10.6283 13.5458 10.9333 13.5729 11.2539 13.5729C11.5664 13.5729 11.8632 13.543 12.1444 13.4833C12.4256 13.4235 12.6722 13.3251 12.8841 13.1879C13.0961 13.0508 13.2639 12.8715 13.3875 12.6502C13.5111 12.4288 13.5729 12.1552 13.5729 11.8293C13.5729 11.593 13.5376 11.3859 13.467 11.208C13.3963 11.0301 13.2944 10.8719 13.1613 10.7334C13.0282 10.5949 12.8685 10.4706 12.6824 10.3606C12.4963 10.2506 12.2864 10.1467 12.0527 10.049C11.8815 9.97833 11.728 9.90977 11.5922 9.84323C11.4563 9.77667 11.3408 9.70878 11.2457 9.63953C11.1506 9.57026 11.0773 9.49693 11.0257 9.41953C10.974 9.34211 10.9482 9.25453 10.9482 9.15674C10.9482 9.06714 10.9713 8.98633 11.0175 8.91435C11.0637 8.84237 11.1289 8.7806 11.2131 8.72898C11.2974 8.6774 11.4006 8.63732 11.5229 8.6088C11.6452 8.58029 11.781 8.56604 11.9304 8.56604C12.0391 8.56604 12.1539 8.57419 12.2748 8.59047C12.3957 8.60677 12.5173 8.6319 12.6396 8.66583C12.7619 8.69979 12.8807 8.74258 12.9962 8.79417C13.1117 8.84578 13.2183 8.90552 13.3161 8.97344V7.75531C13.1178 7.67927 12.9011 7.62292 12.6661 7.58625C12.4311 7.54958 12.1614 7.53125 11.8571 7.53125C11.5473 7.53125 11.2539 7.56453 10.9767 7.63107C10.6996 7.6976 10.4558 7.80148 10.2452 7.94271C10.0346 8.08396 9.86818 8.26388 9.74591 8.48253C9.62365 8.70115 9.5625 8.96255 9.5625 9.26674C9.5625 9.65513 9.67458 9.98648 9.89875 10.2608C10.1229 10.5351 10.4632 10.7673 10.9197 10.9574C11.099 11.0308 11.2661 11.1027 11.421 11.1734C11.5759 11.244 11.7097 11.3173 11.8224 11.3934C11.9352 11.4694 12.0242 11.5522 12.0894 11.6419C12.1546 11.7315 12.1872 11.8333 12.1872 11.9474C12.1872 12.0316 12.1668 12.1097 12.1261 12.1817C12.0853 12.2536 12.0235 12.3161 11.9406 12.3691C11.8578 12.422 11.7545 12.4634 11.6309 12.4933C11.5072 12.5232 11.3626 12.5381 11.1968 12.5381C10.9142 12.5381 10.6344 12.4886 10.3572 12.3894C10.0801 12.2903 9.82333 12.1416 9.58695 11.9433ZM7.39531 8.7313H9.06771V7.66146H4.40625V8.7313H6.07047V13.4948H7.39531V8.7313Z"
				fill="white"
			/>
		</g>
		<defs>
			<clipPath id="clip0_2_18">
				<rect width="13.3333" height="13.3333" fill="white" transform="translate(1.33333 1.33333)" />
			</clipPath>
		</defs>
	</svg>
);
