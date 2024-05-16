import { PortableText } from "@portabletext/react";
import React from "react";
import {
	DarkTemplate,
	LightTemplate,
	TeamTemplate,
	VideoTemplate,
} from "../templates/Templates";

const templateStyles = {
	dark: "w-full bg-black",
	light: "w-full bg-gray-200",
};

const templateComponents = {
	dark: DarkTemplate,
	light: LightTemplate,
	team: TeamTemplate,
	video: VideoTemplate,
};

const ContentBlock = ({ block }) => {
	const { content, layout } = block;
	const theme = layout || "light";
	const styles = templateStyles[theme];
	return (
		<div className={` h-auto min-h-screen w-screen ${styles} relative w-full`}>
			<PortableText
				value={content}
				components={templateComponents[theme] || templateComponents.light}
			/>
		</div>
	);
};

export default ContentBlock;
