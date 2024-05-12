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
	console.log(slug);

	const imageUrl = block.imageRef?.imageUrl;

	return (
		<div className="group flex h-auto flex-col border-gray-600/50 p-1 transition duration-300 ease-in-out">
			<div className="overflow-hidden ">
				<div className="transform transition duration-300 ease-in-out group-hover:scale-105">
					<img
						src={imageUrl}
						alt={"this"}
						className="-[.7em] h-[350px]  w-full object-contain object-cover  lg:h-[33vw]"
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
				className="h-auto w-full bg-gradient-to-r from-blue-100/50 to-blue-100/50 bg-clip-text p-1 pt-3 text-xs font-bold uppercase tracking-widest text-transparent"
			/>
			<a href={`/posts/${slug?.current}`}>
				<Heading
					heading={block.heading}
					className=" cursor-pointer bg-gradient-to-r from-blue-100/100 to-blue-100/90 bg-clip-text p-1 text-5xl font-bold uppercase leading-none text-transparent lg:text-6xl"
				/>
			</a>

			<SubHeading
				heading={block.subheading}
				className="bg-gradient-to-r from-blue-100/50 to-blue-100/50  bg-clip-text p-1 text-xl leading-tight text-transparent"
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
