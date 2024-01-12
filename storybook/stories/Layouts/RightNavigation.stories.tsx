import RightNavigationLayout from "@components/Layouts/CatalogLayout/RightNavigation/RightNavigationLayout";
import pageProps from "../../data/pageProps";

const RightNavigationData = {
	title: "gx/Layouts/RightNavigation",
	decorators: [
		(S) => (
			<div style={{ background: "white", width: "100%", height: "100%" }}>
				<S />
			</div>
		),
	],
};

export const RightNavigation = () => {
	const data = pageProps.data as any;
	return <RightNavigationLayout itemLinks={data.itemLinks} />;
};

export default RightNavigationData;
