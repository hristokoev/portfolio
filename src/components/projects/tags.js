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
				{tags.map((tag) => (
					<li className="m-1" key={tag}>
						<div
							className={`inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-700 shadow-sm bg-slate-800 text-slate-400 duration-150 ease-in-out'}`}
						>
							{tag}
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}