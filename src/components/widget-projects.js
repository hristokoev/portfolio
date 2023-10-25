import getProjectMetadata from './getProjectMetadata'
import Link from 'next/link'

export default async function WidgetProjects() {

	const projectMetadata = getProjectMetadata().sort((a, b) => {
		return new Date(b.date) - new Date(a.date);
	});

	return (
		<div className="rounded-lg border border-slate-800 bg-gradient-to-t from-slate-800 to-slate-800/30 p-5">
			<div className="font-aspekta font-[650] mb-3">Latest Projects</div>
			<ul className="space-y-3 flex flex-col">
				{projectMetadata.slice(0, 5).map((post, postIndex) => (
					<li className="inline-flex" key={post}>
						<span className="text-sky-500 mr-2">—</span>{' '}
						<Link
							key={postIndex}
							className="font-aspekta text-sm inline-flex hover:text-sky-500 duration-150 ease-out"
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