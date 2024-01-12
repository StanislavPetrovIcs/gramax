import type { StorybookConfig } from "@storybook/react-vite";
import { resolve } from "path";
import { UserConfig, mergeConfig } from "vite";
import baseConfig from "../../vite.config";

const config: StorybookConfig = {
	stories: ["../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	core: {
		disableTelemetry: true,
	},
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-onboarding",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},

	async viteFinal(storybookConfig) {
		const config = mergeConfig(baseConfig(), storybookConfig);
		return mergeConfig(config, {
			base: process.env.NODE_ENV == "development" ? "" : "/storybook/",
			resolve: {
				alias: {
					storybook: resolve(__dirname, "../"),
				},
			},
			server: {
				hmr: false,
			},
			publicDir: resolve(__dirname, "../public"),
		} as UserConfig);
	},
};

export default config;
