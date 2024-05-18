import React from "react";

const RenderCategory = ({ category }) => {
	if (!category) return null;

	return (
		<div className="my-1 flex items-center justify-center bg-gradient-to-r from-blue-100/100 to-blue-100/90 p-1 pl-2 pr-2">
			<span
				className={
					"flex h-auto items-center justify-center whitespace-nowrap text-xs font-semibold uppercase tracking-widest text-black "
				}
			>
				{category.title}
			</span>
		</div>
	);
};

const Heading = ({ heading, className }) => {
	if (!heading) return null;
	const displayHeading = heading || "No title";
	return <h1 className={className}>{displayHeading}</h1>;
};

const SubHeading = ({ heading, className }) => {
	if (!heading) return null;
	const displayHeading = heading || "No subtitle";
	return <h2 className={className}>{displayHeading}</h2>;
};

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

const TeamSection = ({ team, theme }) => {
	if (!team) return null;

	return (
		<div className="w-full items-center py-8">
			<a href={`/team/${team.slug.current}`}>
				<div className=" flex h-auto w-full justify-center">
					{team && (
						<div className="flex w-full flex-row flex-wrap  items-center  ">
							{/* <img
								src={team.image}
								alt={`Team member for ${team.name}`}
								className="h-[2em] w-[2em] max-w-[2em] max-h-[2em] object-cover cover rounded-lg"
							/> */}
							<span className="ml-2 cursor-pointer bg-gradient-to-r from-blue-100/100  to-blue-100/90 bg-clip-text text-sm font-bold uppercase uppercase leading-none tracking-wide text-transparent ">
								Posted by {team.name}
							</span>
						</div>
					)}
				</div>
			</a>
		</div>
	);
};

const HeadingBlock = ({ block }) => {
	const { className, publicationDate } = block;

	const theme = block.className;
	const imageUrl = block.imageRef?.imageUrl;

	switch (theme) {
		case "dark":
			return (
				<div className="h-auto w-full pt-16 lg:pt-32">
					<div className="flex w-full flex-wrap justify-center">
						<div
							className={
								"flex-cols flex w-full flex-wrap   items-center justify-between px-2 lg:hidden"
							}
						>
							{block.category && <RenderCategory category={block.category} />}

							<FormattedDate
								date={publicationDate}
								className={
									"  my-1 w-auto bg-gradient-to-r from-blue-100/100 to-blue-100/90 bg-clip-text text-xs uppercase tracking-widest  text-transparent"
								}
							/>
						</div>

						<div className=" flex w-full mb-2 md:mb-16 flex-wrap p-2 lg:w-1/2">
							<div className="h-full w-full object-contain object-cover">
								<img
									src={imageUrl}
									alt={"this"}
									className="lg:pl-16 p-0 w-full"
								/>
							</div>
						</div>

						<div className="flex-cols flex w-full justify-center p-2 pr-4 pt-2 lg:w-1/2 lg:pr-20 lg:pt-4 ">
							<div className="w-full ">
								<div className="mb-6 hidden w-full items-center justify-between lg:flex">
									{block.category && (
										<RenderCategory category={block.category} />
									)}

									<FormattedDate
										date={publicationDate}
										className={
											"  w-auto bg-gradient-to-r from-blue-100/100 to-blue-100/90 bg-clip-text text-xs uppercase tracking-widest text-transparent"
										}
									/>
								</div>
								<Heading
									heading={block.heading}
									className={
										" cursor-pointer bg-gradient-to-r from-blue-100/100 to-blue-100/90 mb-4 bg-clip-text p-1 text-4xl font-semibold  leading-none text-transparent lg:text-5xl"
									}
								/>
								<SubHeading
									heading={block.subheading}
									className="bg-gradient-to-r from-blue-100/80 to-blue-100/70 bg-clip-text p-1 text-xl leading-tight text-transparent"
								/>
								<div className="w-full ">
									<TeamSection team={block.team} />
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		case "light":
			return <div className="h-auto w-full bg-gray-200 pt-20 lg:pt-32" />;
		default:
			return null;
	}
};

export default HeadingBlock;
