import React from "react";

// Section Blocks
export const HeadingBlock = React.lazy(() => import("./section/HeadingBlock"));
export const HeadingSplineBlock = React.lazy(
	() => import("./section/HeadingSplineBlock"),
);

export const TeamBlock = React.lazy(() => import("./section/TeamBlock"));
export const ContentBlock = React.lazy(() => import("./section/ContentBlock"));

// Nested Blocks
export const AudioRefBlock = React.lazy(
	() => import("../../components/blocks/nested/AudioRefBlock"),
);
export const ImageRefBlock = React.lazy(() => import("./nested/ImageRefBlock"));
export const PostsRefBlock = React.lazy(
	() => import("../../components/blocks/nested/PostsRefBlock"),
);
export const QuoteRefBlock = React.lazy(() => import("./nested/QuoteRefBlock"));
export const SplineRefBlock = React.lazy(
	() => import("../../components/blocks/nested/SplineRefBlock"),
);
export const VideoRefBlock = React.lazy(
	() => import("../../components/blocks/nested/VideoRefBlock"),
);
