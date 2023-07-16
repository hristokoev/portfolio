import Link from "next/link";

export default function TagsList({ metadata, slug }) {

	const tags = [...new Set(metadata.map(project => project.tags).flat())];

	const slugs = tags.map((tag) => {
		tag = tag.toLowerCase();
		tag = tag.replace(/\s+|\/|\./g, '-');
		return tag;
	});

	return (
		<div className="mb-4 sm:mb-0">
			{slug}
			<ul className="flex flex-wrap -m-1">
				{tags.map((tag, index) => (
					<li className="m-1">
						<Link
							href={`/${slugs[index]}/projects`}
							className={`inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border ${tag === "All" ? 'border-transparent shadow-sm bg-slate-500 text-white duration-150 ease-in-out' : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out'}`}
						>
							{tag}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}