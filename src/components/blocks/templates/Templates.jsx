import {
	AudioRefBlock,
	ImageRefBlock,
	PostsRefBlock,
	QuoteRefBlock,
	SplineRefBlock,
	VideoRefBlock,
} from "../index";

import React from "react";

const headingStyles = {
	dark: "my-3  w-full  bg-gradient-to-r from-blue-100/90 to-blue-100/80 text-transparent bg-clip-text text-3xl font-bold uppercase leading-none tracking-wide md:w-3/4 lg:w-1/2 lg:text-5xl",
	light:
		"  my-3 w-11/12 text-black text-4xl font-bold uppercase leading-none tracking-wide md:w-3/4 lg:w-1/2 lg:text-5xl",
};

const listStyles = {
	dark: "w-full bg-gradient-to-r from-blue-100/75 to-blue-100/60 text-transparent bg-clip-text leading-7 md:w-3/4 lg:w-1/2 text-xl list-decimal list-inside space-y-6 mb-6",
	light:
		"w-11/12 text-black leading-7 md:w-3/4 text-xl lg:w-1/2  list-decimal list-inside space-y-6 mb-6",
};

const normalTextStyles = {
	dark: "w-full  bg-gradient-to-r from-blue-100/80 to-blue-100/70 text-transparent bg-clip-text leading-[1.5em] lg:leading-[1.75em] tracking-wide text-xl md:w-3/4 lg:w-1/2 lg:text-lg ",
	light:
		"text-black leading-[1.5em] tracking-wide text-xl md:w-3/4 lg:w-1/2 lg:text-xl",
};

const Heading = ({ level, children, theme }) => {
	const className = headingStyles[theme];
	const Tag = `h${level}`;
	return (
		<div className="flex w-full justify-center p-3">
			{React.createElement(Tag, { className }, children)}
		</div>
	);
};

const List = ({ type, children, theme }) => {
	const Tag = type === "bullet" ? "ul" : "ol";
	const className = listStyles[theme];
	return (
		<div className="flex w-full justify-center p-3">
			<Tag className={className}>{children}</Tag>
		</div>
	);
};

const NormalText = ({ children, theme }) => {
	const className = normalTextStyles[theme];
	return (
		<div className="flex w-full justify-center p-3">
			<div className={className}>{children}</div>
		</div>
	);
};

const DarkTemplate = {
	block: {
		normal: (props) => <NormalText {...props} theme="dark" />,
		h1: (props) => <Heading level={1} {...props} theme="dark" />,
		h2: (props) => <Heading level={2} {...props} theme="dark" />,
		h3: (props) => <Heading level={3} {...props} theme="dark" />,
	},
	list: {
		bullet: (props) => <List type="bullet" {...props} theme="dark" />,
		number: (props) => <List type="number" {...props} theme="dark" />,
	},

	types: {
		postsRef: ({ value }) => {
			const { postsHeading, postsSlug, postsImage } = value.postsRef;

			return (
				<PostsRefBlock
					slug={postsSlug}
					heading={postsHeading}
					image={postsImage}
				/>
			);
		},
		videoRef: ({ value }) => {
			const { videoTitle, videoUrl, videoImage, className } = value.videoRef;
			return (
				<VideoRefBlock
					videoTitle={videoTitle}
					videoUrl={videoUrl}
					videoImage={videoImage}
					className={className}
				/>
			);
		},
		spline: ({ value }) => {
			const { url } = value;
			return <SplineRefBlock url={url} />;
		},

		imageRef: ({ value }) => {
			const { image, className } = value;
			return <ImageRefBlock image={image} className={className} />;
		},
		audioRef: ({ value }) => {
			const { audioTitle, audioFileUrl } = value.audioRefData || {};

			return (
				<AudioRefBlock audioFileUrl={audioFileUrl} audioTitle={audioTitle} />
			);
		},
		quoteRef: ({ value }) => {
			const { quoteTitle, quoteImage, className } = value.quoteRef || {};

			return (
				<QuoteRefBlock
					quote={quoteTitle}
					image={quoteImage}
					className={className}
				/>
			);
		},
	},
};

const LightTemplate = {
	block: {
		normal: (props) => <NormalText {...props} theme="light" />,
		h1: (props) => <Heading level={1} {...props} theme="light" />,
		h2: (props) => <Heading level={2} {...props} theme="light" />,
		h3: (props) => <Heading level={3} {...props} theme="light" />,
	},
	list: {
		bullet: (props) => <List type="bullet" {...props} theme="light" />,
		number: (props) => <List type="number" {...props} theme="light" />,
	},

	types: {
		postsRef: ({ value }) => {
			const { postsHeading, postsSlug, postsImage } = value.postsRef;
			return (
				<PostsRefBlock
					slug={postsSlug}
					heading={postsHeading}
					image={postsImage}
				/>
			);
		},
		videoRef: ({ value }) => {
			const { videoTitle, videoUrl, videoImage, className } = value.videoRef;

			return (
				<VideoRefBlock
					videoTitle={videoTitle}
					videoUrl={videoUrl}
					videoImage={videoImage}
					className={className}
				/>
			);
		},
		spline: ({ value }) => {
			const { url } = value;
			return <SplineRefBlock url={url} />;
		},
		imageRef: ({ value }) => {
			const { image, className } = value;
			return <ImageRefBlock image={image} className={className} />;
		},
		audioRef: ({ value }) => {
			return <AudioRefBlock {...(value.audioRefData || {})} />;
		},
		quoteRef: ({ value }) => {
			const { quoteTitle, quoteImage, className } = value.quoteRef || {};

			return (
				<QuoteRefBlock
					quote={quoteTitle}
					image={quoteImage}
					className={className}
				/>
			);
		},
	},
};

const VideoTemplate = {
	block: {
		normal: (props) => <NormalText {...props} theme="light" />,
		h1: (props) => <Heading level={1} {...props} theme="light" />,
		h2: (props) => <Heading level={2} {...props} theme="light" />,
		h3: (props) => <Heading level={3} {...props} theme="light" />,
	},
	list: {
		bullet: (props) => <List type="bullet" {...props} theme="light" />,
		number: (props) => <List type="number" {...props} theme="light" />,
	},
};

const TeamTemplate = {
	block: {
		normal: (props) => <NormalText {...props} theme="dark" />,
		h1: (props) => <Heading level={1} {...props} theme="dark" />,
		h2: (props) => <Heading level={2} {...props} theme="dark" />,
		h3: (props) => <Heading level={3} {...props} theme="dark" />,
	},
	list: {
		bullet: (props) => <List type="bullet" {...props} theme="dark" />,
		number: (props) => <List type="number" {...props} theme="dark" />,
	},
};

export { DarkTemplate, LightTemplate, TeamTemplate, VideoTemplate };
