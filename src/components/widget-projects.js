import getProjectMetadata from './getProjectMetadata'
import Link from 'next/link'

export default async function WidgetProjects() {

	const projectMetadata = getProjectMetadata().sort((a, b) => {
		return new Date(b.date) - new Date(a.date);
	});

	return (
		<div className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 p-5">
			<div className="font-aspekta font-[650] mb-3">Latest Projects</div>
			<ul className="space-y-3 flex flex-col">
				{projectMetadata.slice(0, 5).map((post, postIndex) => (
					<li className="inline-flex" key={post}>
						<span className="text-rose-500 mr-2">—</span>{' '}
						<Link
							key={postIndex}
							className="font-aspekta font-[650] text-sm inline-flex relative hover:text-rose-500 duration-150 ease-out before:scale-x-0 before:origin-center before:absolute before:inset-0 before:bg-rose-200 dark:before:bg-rose-500 before:opacity-30 before:-z-10 before:translate-y-1/4 before:-rotate-2 hover:before:scale-100 before:duration-150 before:ease-in-out"
							href={`/projects/${post.slug}`}
						>
							{post.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}