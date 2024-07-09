import { getSanityImageURL } from "../lib/helpers.js";
import { Image } from "astro:assets";

const FormattedDate = ({ date, className }) => {
	const formattedDate = date
		? new Date(date).toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
		})
		: "Date not available";

	return <span className={className}>{formattedDate}</span>;
};

const Heading = ({ heading, className }) => {
	const displayHeading = heading || "no title";
	return <h2 className={className}>{displayHeading}</h2>;
};

const SubHeading = ({ heading, className }) => {
	const displayHeading = heading || "no title";
	return <h2 className={className}>{displayHeading}</h2>;
};

export const MainPostItem = ({ block, slug }) => {
	const { publicationDate } = block;

	const imageUrl = block.imageRef?.imageUrl;

	return (
		<div className="group flex h-auto flex-col border-gray-600/50 p-1 transition duration-300 ease-in-out">
			<div className="overflow-hidden rounded-[.5em]">
				<div className="transform transition duration-300 ease-in-out group-hover:scale-105 ">
					<img
						src={imageUrl}
						alt={"this"}
						className=" h-full  w-full object-contain object-cover  lg:h-[25vw] rounded-[.5em]"
					/>
					{block.image && (
						<div className="group mb-2 flex h-80 w-full overflow-hidden lg:h-96">
							<Image
								src={getSanityImageURL(imageUrl).url()}
								alt="Post image"
								width={1000}
								height={800}
								format="webp"
								class="h-full w-full transform rounded-md object-cover transition-transform duration-300 group-hover:scale-105 "
							/>
						</div>
					)}
				</div>
			</div>
			<FormattedDate
				date={publicationDate}
				className="h-auto w-full primary-text bg-clip-text p-1 pt-3 text-xs font-bold uppercase tracking-widest text-transparent"
			/>
			<a href={`/posts/${slug?.current}`}>
				<Heading
					heading={block.heading}
					className="heading-text cursor-pointer bg-clip-text p-1 text-3xl font-semibold   leading-[1.25em] text-transparent lg:text-4xl"
				/>
			</a>

			<SubHeading
				heading={block.subheading}
				className="primary-text bg-clip-text p-1 text-lg   leading-[1.5em] text-transparent"
			/>
		</div>
	);
};

export const MainPost = ({ post }) => {
	if (!post || !post.block) {
		return <div>No post available</div>;
	}

	return (
		<div className="my-4 flex w-full px-0 lg:my-0 lg:w-1/2 lg:px-4">
			<MainPostItem block={post.block[0]} slug={post.slug} />
		</div>
	);
};
