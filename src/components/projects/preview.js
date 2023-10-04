'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function ProjectCard(item) {
	return (
		<Link className="rounded-lg border border-slate-200 hover:border-sky-400 dark:border-slate-800 dark:hover:border-sky-700 transition-color ease-in-out group overflow-hidden" href={`/projects/${item.slug}`}>
			<div className="flex flex-col h-full">
				<Image src={item.thumb} width={500} height={300} alt={item.title} className="p-0 w-auto" />
				<div className="p-5 grow dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30">
					<div className="mb-4 md:flex md:items-center md:justify-end md:space-x-2">
						{item.tags.map((tag, index) => (
							<div className="text-xs inline-flex items-center bg-slate-100 dark:bg-slate-600 dark:text-slate-100 rounded-full text-center p-2 mr-2 md:mr-0 h-5" key={index}>{tag}</div>
						))}
					</div>
					<div className="text-lg font-aspekta font-[650] mb-1">{item.title}</div>
					<p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{item.subtitle}</p>
					<div className="text-sky-500 flex justify-end">
						<svg className="fill-current -rotate-45 group-hover:rotate-0 transition-transform ease-out" xmlns="http://www.w3.org/2000/svg" width="14" height="12">
							<path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z" />
						</svg>
					</div>
				</div>
			</div>
		</Link>
	)
}