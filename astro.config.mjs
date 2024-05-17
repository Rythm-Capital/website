import { loadEnv } from "vite";
const {
	PUBLIC_SANITY_STUDIO_PROJECT_ID,
	PUBLIC_SANITY_STUDIO_DATASET,
	PUBLIC_SANITY_PROJECT_ID,
	PUBLIC_SANITY_DATASET,
} = loadEnv(import.meta.env.MODE, process.cwd(), "");
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import sanity from "@sanity/astro";
import { defineConfig } from "astro/config";

const projectId = PUBLIC_SANITY_STUDIO_PROJECT_ID || PUBLIC_SANITY_PROJECT_ID;
const dataset = PUBLIC_SANITY_STUDIO_DATASET || PUBLIC_SANITY_DATASET;

export default defineConfig({
	output: "hybrid",
	adapter: vercel(),
	integrations: [
		sanity({
			projectId,
			dataset,
			studioBasePath: "/studio",
			useCdn: false,
			apiVersion: "2023-03-20",
		}),
		react(),
		tailwind(),
	],
	redirects: {
		"/studio/[...slug]": "/studio",
	},
	server: { port: 3000 },
});
