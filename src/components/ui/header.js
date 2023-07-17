import Link from 'next/link'
import ThemeToggle from './theme-toggle'

export default function Header() {
	return (
		<header>
			<div className="flex items-center justify-between h-20 before:block">
				<div className="grow flex justify-end space-x-4">

					{/* Links */}
					<div>
						<Link className="btn-sm text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-slate-300" href="/">
							Home
						</Link>
					</div>

					<div>
						<Link className="btn-sm text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-slate-300" href="/projects">
							Projects
						</Link>
					</div>

					{/* Light switch */}
					<ThemeToggle />
				</div>
			</div>
			<div className="absolute top-0 translate-y-1/2 left-0 pointer-events-none -z-10 h-40 w-full dark:bg-gradient-to-b from-slate-800 to-slate-900 dark:border-t dark:border-slate-600/50" aria-hidden="true"></div>
		</header>
	)
}
