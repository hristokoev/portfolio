import Link from "next/link";

export default function ProjectTags({ metadata, slug }) {

	const tags = [...new Set(metadata.map(project => project.tags).flat())];

	const slugs = tags.map((tag) => {
		tag = tag.toLowerCase();
		tag = tag.replace(/\s+|\/|\./g, '-');
		return tag;
	});

	return (
		<div className="mb-4 sm:mb-0">
			<ul className="flex flex-wrap -m-1">
				{tags.map((tag, index) => (
					<li className="m-1" key={tag}>
						<Link
							href={`/${slugs[index]}/projects`}
							className={`inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out'}`}
						>
							{tag}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}