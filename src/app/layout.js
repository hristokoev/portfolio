import './css/style.css'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Theme from './theme-provider'
import Header from '@/components/ui/header'
import Cta from '@/components/cta'

import { Analytics } from '@vercel/analytics/react'

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap'
})

const aspekta = localFont({
	src: [
		{
			path: '../../public/fonts/Aspekta-500.woff2',
			weight: '500',
		},
		{
			path: '../../public/fonts/Aspekta-650.woff2',
			weight: '650',
		},
	],
	variable: '--font-aspekta',
	display: 'swap',
})

const trueno = localFont({
	src: [
		{
			path: '../../public/fonts/TruenoRg.otf',
			weight: '400',
		},
		{
			path: '../../public/fonts/TruenoBd.otf',
			weight: '700',
		},
		{
			path: '../../public/fonts/TruenoBlk.otf',
			weight: '900',
		},
		{
			path: '../../public/fonts/TruenoBdOl.otf',
			weight: '700',
			style: 'italic',
		},
		{
			path: '../../public/fonts/TruenoBlkOl.otf',
			weight: '900',
			style: 'italic',
		}
	],
	variable: '--font-trueno',
	display: 'swap',
})

export const metadata = {
	title: 'Hristo Koev - Web Developer & Motion Graphics Artist',
	description: 'A Web Developer based in Prague',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${aspekta.variable} ${trueno.variable} font-inter antialiased bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-200 tracking-tight`}>
				<Theme>
					<div className="max-w-7xl mx-auto">
						<div className="min-h-screen flex">

							{ /* Main content */}
							<main className="grow overflow-hidden px-6">
								<div className="w-full h-full mx-auto flex flex-col">

									<Header />

									{children}

								</div>
							</main>

						</div>
					</div>
					<Cta />
				</Theme>
				<Analytics />
			</body>
		</html>
	)
}
