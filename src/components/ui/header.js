import Link from 'next/link'

export default function Header() {
	return (
		<header>
			{/* Logo */}

			<div className="flex items-center justify-between h-20 before:block">
				<div className="flex items-center space-x-4">
					<Link href="/">
							<div className="font-trueno font-bold text-2xl text-transparent bg-clip-text bg-slate-200">K.</div>
					</Link>
				</div>
				<div className="grow flex justify-end space-x-4">

					{/* Links */}
					<div>
						<Link className="btn-sm text-slate-200 hover:text-slate-300" href="/">
							Home
						</Link>
					</div>

					<div>
						<Link className="btn-sm text-slate-200 hover:text-slate-300" href="/projects">
							Projects
						</Link>
					</div>

				</div>
			</div>
			<div className="absolute top-0 translate-y-1/4 left-0 pointer-events-none -z-10 h-80 w-full bg-gradient-to-b from-slate-800 via-slate-900/50 to-slate-900 border-t border-slate-200 border-slate-600/50" aria-hidden="true"></div>
			<div className="absolute top-0 translate-y-1/4 left-0 pointer-events-none -z-10 h-80 w-full bg-gradient-to-br from-blue-900/10 via-slate-900/50 to-transparent border-t border-slate-200 border-slate-600/50" aria-hidden="true"></div>
		</header>
	)
}
