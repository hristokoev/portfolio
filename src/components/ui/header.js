import Link from 'next/link'
import ThemeToggle from './theme-toggle'

export default function Header() {
	return (
		<header>
			<div className="flex items-center justify-between h-24 before:block">
				<div className="grow flex justify-end space-x-4">

					{/* Links */}
					<div>
						<Link className="btn-sm text-slate-700 hover:text-slate-900 dark:text-slate-100 dark:hover:text-slate-300" href="/">
							Projects
						</Link>
					</div>

					<div>
						<Link className="btn-sm text-slate-700 hover:text-slate-900 dark:text-slate-100 dark:hover:text-slate-300" href="/">
							Contacts
						</Link>
					</div>

					{/* Light switch */}
					<ThemeToggle />
				</div>
			</div>
		</header>
	)
}
