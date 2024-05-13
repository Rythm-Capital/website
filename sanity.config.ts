import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import {
	blockContent,
	contentBlock,
	headingBlock,
	headingSplineBlock,
	teamBlock,
} from "./blocks/index";
import {
	audio,
	category,
	glossary,
	img,
	library,
	model,
	post,
	posts,
	quote,
	team,
	video,
} from "./schema/index";

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET;

export default defineConfig({
	name: "rthmn",
	title: "RTHMN | Studio",
	projectId,
	dataset,

	plugins: [structureTool(), visionTool()],
	schema: {
		types: [
			post,
			posts,
			img,
			audio,
			video,
			quote,
			team,
			category,
			library,
			model,
			glossary,
			contentBlock,
			blockContent,
			headingBlock,
			teamBlock,
			headingSplineBlock,
		],
	},
});
