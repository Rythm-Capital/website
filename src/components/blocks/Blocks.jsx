import React from "react";
import {
	ContentBlock,
	HeadingBlock,
	HeadingSplineBlock,
	TeamBlock,
} from "./index";

const blockTypeComponents = {
	headingBlock: HeadingBlock,
	headingSplineBlock: HeadingSplineBlock,
	contentBlock: ContentBlock,
	teamBlock: TeamBlock,
};

const Blocks = ({ block }) => {
	const BlockComponent = blockTypeComponents[block._type];
	if (!BlockComponent) return null;

	return (
		<div className="relative w-full">
			<BlockComponent
				block={{
					...block,
					layout: block.layout,
					className: block.layout,
				}}
			/>
		</div>
	);
};

export default Blocks;
