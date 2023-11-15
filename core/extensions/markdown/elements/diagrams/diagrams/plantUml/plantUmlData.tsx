export const startPlantUmlText = `@startuml
Bob -> Alice : hello
@enduml`;

export const plantUmlTooltipText = "Диаграмма plantUml";
export const plantUmlIcon = (
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M10.1525 8.936L13.58 11.209L10.86 12.7465L7.4305 10.4995L10.1525 8.936Z" fill="#1C0A42" />
		<path
			d="M10.858 12.8095L10.8305 12.7915L7.328 10.4965L10.1545 8.873L13.6825 11.213L10.858 12.8095ZM7.533 10.503L10.862 12.684L13.4775 11.2055L10.15 9L7.533 10.503Z"
			fill="black"
		/>
		<path
			d="M13.2005 5.9545L14.709 6.796L13.535 7.544L12.1065 6.6235L13.2005 5.9545Z"
			fill="url(#paint0_linear_11_41)"
		/>
		<path
			d="M13.5345 7.6075L12.0055 6.6225L13.199 5.8925L14.813 6.7925L13.5345 7.6075ZM12.2075 6.6245L13.535 7.48L14.604 6.8L13.204 6.0175L12.2075 6.6245Z"
			fill="black"
		/>
		<path d="M7.249 8.9035L10.677 11.177L7.957 12.7145L4.5275 10.4675L7.249 8.9035Z" fill="#FFBD3F" />
		<path
			d="M7.955 12.777L7.9275 12.759L4.425 10.4645L7.25 8.8405L10.778 11.1805L7.955 12.777ZM4.63 10.4705L7.959 12.65L10.5745 11.1715L7.2475 8.965L4.63 10.4705Z"
			fill="black"
		/>
		<path d="M3.995 8.983L7.477 11.183L4.7885 12.752L1.109 10.4245L3.995 8.983Z" fill="#A11F40" />
		<path
			d="M4.7875 12.8145L1 10.419L4 8.919L7.582 11.1825L4.7875 12.8145ZM1.218 10.43L4.79 12.689L7.374 11.181L3.992 9.0445L1.218 10.43Z"
			fill="black"
		/>
		<path d="M1.0555 10.5105L4.7215 12.7575V14.5315L1.0555 12.166V10.5105Z" fill="url(#paint1_linear_11_41)" />
		<path
			d="M4.775 14.63L1 12.1955V10.4145L4.775 12.7275V14.63ZM1.109 12.137L4.668 14.433V12.7875L1.109 10.6065V12.137Z"
			fill="black"
		/>
		<path d="M12.0355 6.6715L13.5045 7.611V11.0655L12.0355 10.1235V6.6715Z" fill="url(#paint2_linear_11_41)" />
		<path
			d="M13.5315 11.1145L12.009 10.138V6.6225L13.5315 7.596V11.1145ZM12.0625 10.1085L13.478 11.016V7.6255L12.0625 6.7205V10.1085Z"
			fill="black"
		/>
		<path
			d="M13.5745 11.263V7.597L14.757 6.8875V14.5745H14.1655H4.823V12.8005L7.543 11.263L7.8925 12.8005H7.898L10.736 11.263L10.9455 12.8005H10.9725L13.5745 11.263Z"
			fill="white"
		/>
		<path
			d="M14.8105 14.628H4.7695V12.769L7.5795 11.1805L7.9295 12.722L10.7795 11.1785L10.9905 12.7285L13.521 11.233V7.5665L14.811 6.7925L14.8105 14.628ZM4.8765 14.5205H14.7035V6.982L13.628 7.627V11.293L13.6015 11.3085L10.987 12.8535H10.9L10.6945 11.3465L7.9125 12.8535H7.85L7.507 11.3445L4.877 12.831L4.8765 14.5205Z"
			fill="black"
		/>
		<path
			d="M6.8985 12.72H6.2855C6.22613 12.72 6.178 12.7681 6.178 12.8275V13.4405C6.178 13.4999 6.22613 13.548 6.2855 13.548H6.8985C6.95787 13.548 7.006 13.4999 7.006 13.4405V12.8275C7.006 12.7681 6.95787 12.72 6.8985 12.72Z"
			fill="url(#paint3_linear_11_41)"
		/>
		<path
			d="M6.9 13.6H6.285C6.2423 13.6 6.20135 13.583 6.17116 13.5528C6.14096 13.5227 6.124 13.4817 6.124 13.439V12.8275C6.124 12.7848 6.14096 12.7438 6.17116 12.7137C6.20135 12.6835 6.2423 12.6665 6.285 12.6665H6.9C6.9427 12.6665 6.98365 12.6835 7.01384 12.7137C7.04404 12.7438 7.061 12.7848 7.061 12.8275V13.4405C7.0606 13.4829 7.04347 13.5235 7.01332 13.5534C6.98317 13.5832 6.94244 13.6 6.9 13.6ZM6.285 12.7735C6.27085 12.7736 6.25732 12.7793 6.24731 12.7893C6.23731 12.7993 6.23163 12.8129 6.2315 12.827V13.44C6.23163 13.4541 6.23731 13.4677 6.24731 13.4777C6.25732 13.4877 6.27085 13.4934 6.285 13.4935H6.9C6.91415 13.4934 6.92768 13.4877 6.93769 13.4777C6.94769 13.4677 6.95337 13.4541 6.9535 13.44V12.8275C6.95337 12.8134 6.94769 12.7998 6.93769 12.7898C6.92768 12.7798 6.91415 12.7741 6.9 12.774L6.285 12.7735Z"
			fill="black"
		/>
		<path
			d="M9.866 12.6715H9.253C9.19363 12.6715 9.1455 12.7196 9.1455 12.779V13.392C9.1455 13.4514 9.19363 13.4995 9.253 13.4995H9.866C9.92537 13.4995 9.9735 13.4514 9.9735 13.392V12.779C9.9735 12.7196 9.92537 12.6715 9.866 12.6715Z"
			fill="url(#paint4_linear_11_41)"
		/>
		<path
			d="M9.866 13.553H9.2525C9.2098 13.553 9.16885 13.536 9.13865 13.5058C9.10846 13.4757 9.0915 13.4347 9.0915 13.392V12.779C9.0915 12.7363 9.10846 12.6953 9.13865 12.6652C9.16885 12.635 9.2098 12.618 9.2525 12.618H9.8655C9.9082 12.618 9.94915 12.635 9.97934 12.6652C10.0095 12.6953 10.0265 12.7363 10.0265 12.779V13.392C10.0265 13.4346 10.0096 13.4755 9.97952 13.5057C9.94943 13.5358 9.90861 13.5529 9.866 13.553ZM9.253 12.725C9.23885 12.7251 9.22532 12.7308 9.21531 12.7408C9.20531 12.7508 9.19963 12.7644 9.1995 12.7785V13.3915C9.19963 13.4056 9.20531 13.4192 9.21531 13.4292C9.22532 13.4392 9.23885 13.4449 9.253 13.445H9.866C9.88015 13.4449 9.89368 13.4392 9.90369 13.4292C9.91369 13.4192 9.91937 13.4056 9.9195 13.3915V12.779C9.91937 12.7649 9.91369 12.7513 9.90369 12.7413C9.89368 12.7313 9.88015 12.7256 9.866 12.7255L9.253 12.725Z"
			fill="black"
		/>
		<path
			d="M12.9405 12.6715H12.3275C12.2681 12.6715 12.22 12.7196 12.22 12.779V13.392C12.22 13.4514 12.2681 13.4995 12.3275 13.4995H12.9405C12.9999 13.4995 13.048 13.4514 13.048 13.392V12.779C13.048 12.7196 12.9999 12.6715 12.9405 12.6715Z"
			fill="url(#paint5_linear_11_41)"
		/>
		<path
			d="M12.9405 13.553H12.3275C12.2848 13.553 12.2439 13.536 12.2137 13.5058C12.1835 13.4757 12.1665 13.4347 12.1665 13.392V12.779C12.1665 12.7363 12.1835 12.6953 12.2137 12.6652C12.2439 12.635 12.2848 12.618 12.3275 12.618H12.9405C12.9832 12.618 13.0242 12.635 13.0543 12.6652C13.0845 12.6953 13.1015 12.7363 13.1015 12.779V13.392C13.1015 13.4347 13.0845 13.4757 13.0543 13.5058C13.0242 13.536 12.9832 13.553 12.9405 13.553ZM12.3275 12.725C12.3134 12.7251 12.2998 12.7308 12.2898 12.7408C12.2798 12.7508 12.2741 12.7644 12.274 12.7785V13.3915C12.2741 13.4056 12.2798 13.4192 12.2898 13.4292C12.2998 13.4392 12.3134 13.4449 12.3275 13.445H12.9405C12.9547 13.4449 12.9682 13.4392 12.9782 13.4292C12.9882 13.4192 12.9939 13.4056 12.994 13.3915V12.779C12.9939 12.7649 12.9882 12.7513 12.9782 12.7413C12.9682 12.7313 12.9547 12.7256 12.9405 12.7255L12.3275 12.725Z"
			fill="black"
		/>
		<path
			d="M13.6075 5.615C13.5815 5.6495 13.399 5.484 13.281 5.352C13.1829 5.23939 13.0964 5.11709 13.023 4.987C12.9445 4.86833 12.8861 4.7376 12.85 4.6C12.8248 4.4882 12.816 4.37333 12.824 4.259C12.8293 4.13191 12.851 4.00604 12.8885 3.8845C12.9711 3.65557 13.1059 3.44897 13.282 3.281C13.5099 3.06097 13.7241 2.8272 13.9235 2.581C14.0293 2.44134 14.1103 2.28456 14.163 2.1175C14.2037 1.97818 14.229 1.83483 14.2385 1.69C14.248 1.508 14.226 1.3935 14.25 1.3835C14.274 1.3735 14.3575 1.5205 14.3935 1.6655C14.4419 2.03149 14.3609 2.4029 14.1645 2.7155C14.0148 2.97986 13.8309 3.2233 13.6175 3.4395C13.4226 3.6028 13.2758 3.8161 13.193 4.0565C13.1626 4.16841 13.1481 4.28405 13.15 4.4C13.1675 4.67215 13.2491 4.93631 13.388 5.171C13.532 5.457 13.628 5.5875 13.6075 5.615Z"
			fill="#EA2D2E"
		/>
		<path
			d="M13.5965 5.633C13.5345 5.633 13.3505 5.4505 13.271 5.361C13.1722 5.2477 13.0851 5.12475 13.011 4.994C12.9324 4.87414 12.874 4.74223 12.838 4.6035C12.8124 4.49041 12.8034 4.37418 12.8115 4.2585C12.8168 4.13023 12.8386 4.00317 12.8765 3.8805C12.9605 3.6502 13.0961 3.44221 13.273 3.2725C13.42 3.107 13.523 3.0085 13.6025 2.9295C13.7186 2.82252 13.8229 2.70334 13.9135 2.574C14.0184 2.4355 14.0989 2.2801 14.1515 2.1145C14.1919 1.97616 14.2171 1.83381 14.2265 1.69C14.2305 1.6105 14.2265 1.543 14.2265 1.4935C14.2265 1.414 14.2235 1.381 14.2455 1.372C14.2489 1.3704 14.2525 1.36957 14.2563 1.36957C14.26 1.36957 14.2636 1.3704 14.267 1.372C14.3386 1.45432 14.3869 1.55426 14.407 1.6615C14.4576 2.03106 14.3762 2.40662 14.177 2.722C14.0265 2.98733 13.8415 3.23161 13.627 3.4485C13.5995 3.4785 13.5725 3.5065 13.546 3.534C13.386 3.67444 13.2681 3.85653 13.2055 4.06C13.1764 4.16975 13.1626 4.28298 13.1645 4.3965C13.1824 4.66649 13.2634 4.92852 13.401 5.1615C13.458 5.277 13.5085 5.369 13.5455 5.436C13.61 5.5535 13.6345 5.5975 13.6165 5.6205C13.6141 5.62358 13.6111 5.62608 13.6077 5.62781C13.6042 5.62954 13.6004 5.63046 13.5965 5.6305V5.633ZM14.256 1.4C14.2525 1.43157 14.2525 1.46343 14.256 1.495C14.256 1.545 14.2595 1.613 14.256 1.695C14.2464 1.84084 14.2209 1.98519 14.18 2.1255C14.1266 2.29376 14.045 2.45169 13.9385 2.5925C13.8469 2.7233 13.7415 2.84384 13.624 2.952C13.543 3.031 13.442 3.129 13.2955 3.2935C13.1211 3.46103 12.9873 3.66627 12.9045 3.8935C12.8673 4.01407 12.8458 4.13893 12.8405 4.265C12.8327 4.37817 12.8414 4.49187 12.8665 4.6025C12.9021 4.73875 12.9597 4.86829 13.037 4.986C13.1101 5.11514 13.1961 5.23658 13.2935 5.3485C13.3768 5.45566 13.4806 5.54509 13.599 5.6115C13.5822 5.55654 13.5574 5.50432 13.5255 5.4565C13.4885 5.3895 13.438 5.2975 13.3805 5.181C13.2395 4.94338 13.1567 4.67575 13.139 4.4C13.1372 4.28395 13.1513 4.1682 13.181 4.056C13.2453 3.84846 13.3653 3.66255 13.528 3.5185C13.554 3.491 13.581 3.463 13.6085 3.433C13.8211 3.21769 14.0043 2.97526 14.1535 2.712C14.3495 2.4024 14.4302 2.03367 14.3815 1.6705C14.3615 1.57172 14.3185 1.47904 14.256 1.4Z"
			fill="black"
		/>
		<path
			d="M14.986 3.0435C14.9765 2.9995 14.77 3.0235 14.603 3.08C14.3991 3.15426 14.2171 3.27837 14.0735 3.441C13.808 3.68036 13.6442 4.0122 13.6155 4.3685C13.6254 4.55161 13.6692 4.73131 13.7445 4.8985C13.855 5.1845 13.972 5.285 13.9665 5.511C13.963 5.661 13.9095 5.753 13.9425 5.7855C13.9755 5.818 14.0995 5.7355 14.1735 5.629C14.2667 5.47541 14.3118 5.29744 14.303 5.118C14.28 4.7105 14.003 4.6105 13.999 4.218C13.9993 4.1023 14.0211 3.98767 14.0635 3.88C14.285 3.2545 15.004 3.126 14.986 3.0435Z"
			fill="#EA2D2E"
		/>
		<path
			d="M13.967 5.8085C13.9607 5.80877 13.9543 5.80776 13.9484 5.80552C13.9425 5.80329 13.9371 5.79988 13.9325 5.7955C13.9095 5.7725 13.9175 5.7345 13.93 5.677C13.9429 5.6227 13.9504 5.56727 13.9525 5.5115C13.951 5.38389 13.9139 5.25923 13.8455 5.1515C13.803 5.07114 13.765 4.98851 13.7315 4.904C13.6555 4.73526 13.6116 4.55383 13.602 4.369C13.6297 4.00897 13.795 3.67342 14.0635 3.432C14.2088 3.26798 14.3927 3.14271 14.5985 3.0675C14.7195 3.01727 14.8517 3.00002 14.9815 3.0175C14.9862 3.0196 14.9903 3.02278 14.9935 3.02678C14.9967 3.03078 14.9989 3.03548 15 3.0405C15.0075 3.0755 14.954 3.101 14.847 3.1525C14.6761 3.21668 14.5198 3.31449 14.3874 3.44013C14.2549 3.56578 14.1491 3.71671 14.076 3.884C14.0342 3.99022 14.0126 4.10334 14.0125 4.2175C14.0173 4.37594 14.0679 4.5296 14.158 4.66C14.2496 4.79599 14.3042 4.95349 14.3165 5.117C14.3258 5.29951 14.2798 5.48059 14.1845 5.6365C14.1361 5.71603 14.0618 5.77642 13.974 5.8075L13.967 5.8085ZM14.9115 3.034C14.8078 3.0385 14.7054 3.05821 14.6075 3.0925C14.4059 3.16635 14.2258 3.2892 14.0835 3.45C13.8199 3.68661 13.6572 4.0154 13.629 4.3685C13.6388 4.54992 13.6822 4.72793 13.757 4.8935C13.79 4.97715 13.8276 5.05894 13.8695 5.1385C13.9398 5.25017 13.9778 5.37907 13.9795 5.511C13.9772 5.56846 13.9694 5.62557 13.956 5.6815C13.9465 5.727 13.9385 5.763 13.9515 5.7755C13.9541 5.77769 13.9572 5.77927 13.9604 5.78013C13.9637 5.781 13.9672 5.78112 13.9705 5.7805C14.0502 5.74985 14.1174 5.69356 14.1615 5.6205C14.2524 5.46916 14.2966 5.29435 14.2885 5.118C14.2762 4.95875 14.2228 4.8054 14.1335 4.673C14.0411 4.53857 13.989 4.38053 13.9835 4.2175C13.9835 4.10011 14.0056 3.98376 14.0485 3.8745C14.1228 3.70375 14.2308 3.54971 14.3659 3.42155C14.501 3.29338 14.6606 3.19372 14.835 3.1285C14.898 3.098 14.9765 3.0605 14.9735 3.0465L14.9695 3.043C14.9511 3.03569 14.9313 3.03261 14.9115 3.034Z"
			fill="black"
		/>
		<defs>
			<linearGradient
				id="paint0_linear_11_41"
				x1="13.1132"
				y1="6.68057"
				x2="14.4413"
				y2="6.18635"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#767676" />
				<stop offset="1" />
			</linearGradient>
			<linearGradient
				id="paint1_linear_11_41"
				x1="1.47902"
				y1="11.2289"
				x2="2.08076"
				y2="14.2363"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#0079B9" />
				<stop offset="1" />
			</linearGradient>
			<linearGradient
				id="paint2_linear_11_41"
				x1="12.4067"
				y1="8.24182"
				x2="13.2232"
				y2="10.3849"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#0079B9" />
				<stop offset="1" />
			</linearGradient>
			<linearGradient
				id="paint3_linear_11_41"
				x1="6.178"
				y1="13.134"
				x2="7.0055"
				y2="13.134"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#595959" />
				<stop offset="0.087" stopColor="#6E6E6E" />
				<stop offset="0.242" stopColor="#8C8C8C" />
				<stop offset="0.405" stopColor="#A4A4A4" />
				<stop offset="0.577" stopColor="#B5B5B5" />
				<stop offset="0.765" stopColor="#BFBFBF" />
				<stop offset="1" stopColor="#C2C2C2" />
			</linearGradient>
			<linearGradient
				id="paint4_linear_11_41"
				x1="9.1455"
				y1="13.0855"
				x2="9.973"
				y2="13.0855"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#595959" />
				<stop offset="0.087" stopColor="#6E6E6E" />
				<stop offset="0.242" stopColor="#8C8C8C" />
				<stop offset="0.405" stopColor="#A4A4A4" />
				<stop offset="0.577" stopColor="#B5B5B5" />
				<stop offset="0.765" stopColor="#BFBFBF" />
				<stop offset="1" stopColor="#C2C2C2" />
			</linearGradient>
			<linearGradient
				id="paint5_linear_11_41"
				x1="12.22"
				y1="13.0855"
				x2="13.048"
				y2="13.0855"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#595959" />
				<stop offset="0.087" stopColor="#6E6E6E" />
				<stop offset="0.242" stopColor="#8C8C8C" />
				<stop offset="0.405" stopColor="#A4A4A4" />
				<stop offset="0.577" stopColor="#B5B5B5" />
				<stop offset="0.765" stopColor="#BFBFBF" />
				<stop offset="1" stopColor="#C2C2C2" />
			</linearGradient>
		</defs>
	</svg>
);
