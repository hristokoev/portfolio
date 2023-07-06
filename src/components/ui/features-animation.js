export default function FeaturesAnimation() {
	return (
		<section>
			<div className="max-w-6xl mx-auto px-4 md:px-6">
				<div className="py-12 border-t border-slate-200 dark:border-slate-800">

					{/* Section header */}
					<div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 space-y-4">
						<h3 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Toolkit</h3>
						<p>Some of the technologies I've been working with recently</p>
					</div>

					{/* Custom animation */}
					<div className="max-w-3xl mx-auto">
						<div className="relative flex justify-center items-center overflow-hidden">

							{/* Big circle behind: light layout */}
							<svg className="dark:hidden" width="432" height="432" viewBox="0 0 432 432" xmlns="http://www.w3.org/2000/svg">
								<defs>
									<radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="48.919%" id="prefix__a">
										<stop stopColor="#0EA5E9" stopOpacity=".64" offset="0%" />
										<stop stopColor="#7DD3FC" stopOpacity="0" offset="100%" />
									</radialGradient>
								</defs>
								<g fill="none" fillRule="evenodd">
									<circle fill="url(#prefix__a)" cx="216" cy="216" r="216" />
									<g transform="translate(22 22)" stroke="#334454">
										<circle strokeOpacity=".04" cx="194" cy="194" r="193.5" />
										<circle strokeOpacity=".08" strokeWidth="1" cx="194" cy="194" r="153" />
										<circle strokeOpacity=".12" strokeWidth="1.5" cx="194" cy="194" r="112.75" />
									</g>
								</g>
							</svg>

							{/* Big circle behind: dark layout */}
							<svg className="hidden dark:block" width="432" height="432" viewBox="0 0 432 432" xmlns="http://www.w3.org/2000/svg">
								<defs>
									<radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="50%" id="circleill_a">
										<stop stopColor="#020617" stopOpacity="0" offset="0%" />
										<stop stopColor="#334454" stopOpacity=".32" offset="100%" />
									</radialGradient>
								</defs>
								<circle cx="216" cy="216" r="216" fill="url(#circleill_a)" fillRule="evenodd" />
							</svg>

							{/* Moving tags */}
							<div className="absolute inset-0">
								<div className="absolute font-medium px-4 py-2 text-white dark:text-sky-500 bg-gradient-to-tr from-sky-500 to-sky-400 dark:bg-sky-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation mt-28">JavaScript</div>
								<div className="absolute font-medium px-4 py-2 text-white dark:text-teal-500 bg-gradient-to-tr from-teal-500 to-teal-400 dark:bg-teal-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-1 mt-72">HTML</div>
								<div className="absolute font-medium px-4 py-2 text-white dark:text-pink-500 bg-gradient-to-tr from-pink-500 to-pink-400 dark:bg-pink-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-2 mt-40">CSS</div>
								<div className="absolute font-medium px-4 py-2 text-white dark:text-sky-500 bg-gradient-to-tr from-sky-500 to-sky-400 dark:bg-sky-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-3 mt-80 top-4">PHP</div>
								<div className="absolute font-medium px-4 py-2 text-white dark:text-sky-500 bg-gradient-to-tr from-sky-500 to-sky-400 dark:bg-sky-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-4 mt-56">React</div>
								<div className="absolute font-medium px-4 py-2 text-white dark:text-pink-500 bg-gradient-to-tr from-pink-500 to-pink-400 dark:bg-pink-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-4">NextJS</div>
								<div className="absolute font-medium px-4 py-2 text-white dark:text-teal-500 bg-gradient-to-tr from-teal-500 to-teal-400 dark:bg-teal-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-5 mt-14">Tailwind</div>
								<div className="absolute font-medium px-4 py-2 text-white dark:text-purple-500 bg-gradient-to-tr from-purple-500 to-purple-400 dark:bg-purple-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-5 mt-80 top-4">SASS</div>
								<div className="absolute font-medium px-4 py-2 text-white dark:text-sky-500 bg-gradient-to-tr from-sky-500 to-sky-400 dark:bg-sky-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-6 mt-40">Firebase</div>
								<div className="absolute font-medium px-4 py-2 text-white dark:text-sky-500 bg-gradient-to-tr from-sky-500 to-sky-400 dark:bg-sky-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-7">WordPress</div>
								<div className="absolute font-medium px-4 py-2 text-white dark:text-pink-500 bg-gradient-to-tr from-pink-500 to-pink-400 dark:bg-pink-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-7 mt-72">After Effects</div>
								<div className="absolute font-medium px-4 py-2 text-white dark:text-purple-500 bg-gradient-to-tr from-purple-500 to-purple-400 dark:bg-purple-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-8 mt-28">Photoshop</div>
								<div className="absolute font-medium px-4 py-2 text-white dark:text-teal-500 bg-gradient-to-tr from-teal-500 to-teal-400 dark:bg-teal-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-10 mt-80 top-4">Cinema 4D</div>
							</div>

							{/* Inner cricle */}
							<svg className="absolute rounded-full backdrop-blur-sm fill-none" width="148" height="148" viewBox="0 0 148 148" xmlns="http://www.w3.org/2000/svg">
								<circle cx="74" cy="74" r="74" fill="#738AA533" fillRule="evenodd" />
							</svg>

							{/* Logo */}
							<svg className="absolute w-12 h-12 animate-spin" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
								<defs>
									<linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="logo_a">
										<stop stopColor="#3ABAB4" offset="0%" />
										<stop stopColor="#7F9CF5" offset="100%" />
									</linearGradient>
									<linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="logo_b">
										<stop stopColor="#3ABAB4" offset="0%" />
										<stop stopColor="#3ABAB4" stopOpacity="0" offset="100%" />
									</linearGradient>
								</defs>
								<path d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z" fill="url(#logo_a)" />
								<path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z" fill="url(#logo_b)" />
							</svg>
							{/* Side gradients */}
							<div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-white dark:from-slate-900" aria-hidden="true"></div>
							<div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-white dark:from-slate-900" aria-hidden="true"></div>
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}