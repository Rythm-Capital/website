// import Spline from '@splinetool/react-spline'

import { useState } from 'react'

export default function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState(false)

	const toggleNav = () => {
		setIsNavOpen(!isNavOpen)
		document.body.style.overflow = isNavOpen ? 'auto' : 'hidden'
	}
	const closeNav = () => {
		setIsNavOpen(false)
		document.body.style.overflow = 'auto'
	}
	const handleBackdropClick = () => {
		closeNav()
	}

	const as = [
		{ href: '/story', label: 'Story', icon: 'story' },
		{
			href: 'https://www.youtube.com/@realitydesigners',
			label: 'Videos',
			icon: 'video'
		},
		{ href: '#', label: 'Library', icon: 'lock' },
		{ href: '/lab', label: 'Lab', icon: 'video' },
		{ href: '#', label: 'Contact', icon: 'lock' }
	]

	type IconName = 'logo' | 'menu' | 'library' | 'lock' | 'story' | 'video'

	const getIcon = (name: IconName) => {
		const icons = {
			logo: (
				// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
				<svg
					width="40"
					height="40"
					viewBox="0 0 100 100"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_1208_27417)">
						<path
							d="M27.512 73.5372L27.512 28.512C27.512 27.9597 27.9597 27.512 28.512 27.512L70.4597 27.512C71.0229 27.512 71.475 27.9769 71.4593 28.54L70.8613 49.9176C70.8462 50.4588 70.4031 50.8896 69.8617 50.8896L50.7968 50.8896C49.891 50.8896 49.4519 51.9975 50.1117 52.618L92.25 92.25M92.25 92.25L48.2739 92.25L7.75002 92.25C7.19773 92.25 6.75002 91.8023 6.75002 91.25L6.75 7.75C6.75 7.19771 7.19772 6.75 7.75 6.75L91.25 6.75003C91.8023 6.75003 92.25 7.19775 92.25 7.75003L92.25 92.25Z"
							stroke="url(#paint0_linear_1208_27417)"
							stroke-width="9"
						/>
					</g>
					<defs>
						<linearGradient
							id="paint0_linear_1208_27417"
							x1="6.74999"
							y1="6.75001"
							x2="92.25"
							y2="92.25"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#EAEDF3" />
							<stop offset="1" stop-color="#CBD3E7" />
						</linearGradient>
						<clipPath id="clip0_1208_27417">
							<rect width="100" height="100" fill="white" />
						</clipPath>
					</defs>
				</svg>
			),
			menu: (
				// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
				<svg
					width="35"
					height="35"
					fill="none"
					viewBox="0 0 24 24"
					stroke="#fff" //{logoColor}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d={isNavOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
					/>
				</svg>
			),
			library: (
				// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
				<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M4 3H20V21H4V3ZM6 5V19H18V5H6Z" stroke="currentColor" strokeWidth="2" />
					<path d="M9 7H15" stroke="currentColor" strokeWidth="2" />
					<path d="M9 11H15" stroke="currentColor" strokeWidth="2" />
					<path d="M9 15H15" stroke="currentColor" strokeWidth="2" />
				</svg>
			),

			lock: (
				// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
				<svg
					width="20"
					height="20"
					viewBox="0 0 18 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1 11C1 9.11438 1 8.17157 1.58579 7.58579C2.17157 7 3.11438 7 5 7H13C14.8856 7 15.8284 7 16.4142 7.58579C17 8.17157 17 9.11438 17 11V13C17 15.8284 17 17.2426 16.1213 18.1213C15.2426 19 13.8284 19 11 19H7C4.17157 19 2.75736 19 1.87868 18.1213C1 17.2426 1 15.8284 1 13V11Z"
						stroke="#444"
						strokeWidth="2"
					/>
					<path
						d="M13 6V5C13 2.79086 11.2091 1 9 1V1C6.79086 1 5 2.79086 5 5V6"
						stroke="#444"
						strokeWidth="2"
						strokeLinecap="round"
					/>
					<circle cx="9" cy="13" r="2" fill="#444" />
				</svg>
			),
			story: (
				// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
				<svg
					width="20"
					height="16"
					viewBox="0 0 20 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M19 12.6953V1.66466C19 1.34631 18.6785 1.12861 18.3829 1.24685L14.1351 2.94596C14.0473 2.98109 13.9506 2.98765 13.8588 2.96471L6.14116 1.03529C6.04939 1.01235 5.95273 1.01891 5.8649 1.05404L1.28287 2.88685C1.11203 2.95519 1 3.12066 1 3.30466V14.3353C1 14.6537 1.32154 14.8714 1.61713 14.7531L5.8649 13.054C5.95273 13.0189 6.04939 13.0123 6.14117 13.0353L13.8588 14.9647C13.9506 14.9877 14.0473 14.9811 14.1351 14.946L18.7171 13.1131C18.888 13.0448 19 12.8793 19 12.6953Z"
						stroke="#999"
						strokeWidth="2"
						strokeLinejoin="round"
					/>
					<path d="M14 15V3" stroke="#999" strokeWidth="2" />
					<path d="M6 13L6 1" stroke="#999" strokeWidth="2" />
				</svg>
			),
			video: (
				// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
				<svg
					width="20"
					height="16"
					viewBox="0 0 20 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M19 12.6953V1.66466C19 1.34631 18.6785 1.12861 18.3829 1.24685L14.1351 2.94596C14.0473 2.98109 13.9506 2.98765 13.8588 2.96471L6.14116 1.03529C6.04939 1.01235 5.95273 1.01891 5.8649 1.05404L1.28287 2.88685C1.11203 2.95519 1 3.12066 1 3.30466V14.3353C1 14.6537 1.32154 14.8714 1.61713 14.7531L5.8649 13.054C5.95273 13.0189 6.04939 13.0123 6.14117 13.0353L13.8588 14.9647C13.9506 14.9877 14.0473 14.9811 14.1351 14.946L18.7171 13.1131C18.888 13.0448 19 12.8793 19 12.6953Z"
						stroke="#999"
						strokeWidth="2"
						strokeLinejoin="round"
					/>
					<path d="M14 15V3" stroke="#999" strokeWidth="2" />
					<path d="M6 13L6 1" stroke="#999" strokeWidth="2" />
				</svg>
			)
		}
		return icons[name] || <path />
	}

	return (
		<>
			{isNavOpen && (
				// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
				<div
					className="fixed inset-0 z-40 bg-black backdrop-blur-[.5em] lg:bg-black/20"
					onClick={handleBackdropClick}
				/>
			)}

			<nav id="navbar" className="fixed top-0 z-50 flex h-16 w-full items-center justify-between ">
				<div className="relative z-10 flex w-auto items-center pl-4 lg:pl-24">
					<a href="/" className="flex items-center gap-2" onClick={closeNav}>
						<div className="flex h-8 w-8 items-center">{getIcon('logo')}</div>
						<div className="heading-text text-xl">RTHMN</div>
					</a>
				</div>
				<div className="primary-text text-md hidden flex-row gap-12 font-medium tracking-wide lg:flex ">
					<a href="/"> Pricing </a>
					<a href="/"> Why Rthmn </a>
					<a href="/"> Tools </a>
					<a href="/"> Company </a>
				</div>
				<div className="flex flex-row gap-2 p-4 md:gap-4 lg:pr-24">
					<div className="primary-text  border border-gray-500 px-2 py-1 pt-[.4em] font-bold">
						LOGIN
					</div>
					<div className="rounded-full border border-gray-500 bg-gradient-to-r from-[#7886FF] to-[#CBFFFF] px-3 py-1 font-bold  text-black text-white md:block">
						SIGNUP
					</div>
				</div>
				{/* <div className="relative block pr-6 lg:hidden ">
					<button
						id="nav-toggle"
						className="relative z-20 flex h-10  w-10 items-center  justify-center "
						aria-label="Toggle Menu"
						onClick={toggleNav}
						type="button"
					>
						{getIcon('menu')}
					</button>
				</div> */}

				<div
					id="nav-content"
					role="menu"
					className={`lg:duration-400 absolute right-0 top-0  h-screen w-full flex-col rounded-[0em] bg-black shadow-lg transition-transform duration-0 ease-in-out lg:mt-0  lg:h-[100vh] lg:w-full lg:rounded-[1em] lg:bg-black/80 lg:py-16 ${
						isNavOpen ? 'translate-x-0 ' : 'translate-x-full '
					} flex h-screen w-full flex-col justify-start p-3`}
				>
					<div className="h-full overflow-y-auto lg:flex lg:justify-between">
						<div className="mb-2 block w-full lg:order-2 lg:mb-0 lg:h-full lg:w-2/3">
							{/* <a href="/" onClick={closeNav}>
								<Spline scene="https://prod.spline.design/WV4nziwJaLKBH2tE/scene.splinecode" />
							</a> */}
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}
