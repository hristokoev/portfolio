import Link from "next/link";

export default function TagsList({ selectedTag }) {

	const tags = [
		{ name: "All", id: "all" },
		{ name: "Next.js", id: "next-js" },
		{ name: "Tailwind CSS", id: "tailwind-css" },
		{ name: "React", id: "react" },
		{ name: "Firebase", id: "firebase" },
		{ name: "AI", id: "ai" },
		{ name: "JavaScript", id: "javascript" },
		{ name: "HTML/CSS", id: "html-css" },
		{ name: "C", id: "c" },
		{ name: "PHP", id: "php" },
		{ name: "Shopify", id: "shopify" },
		{ name: "Liquid", id: "liquid" },
		{ name: "WordPress", id: "wordpress" },
		{ name: "After Effects", id: "after-effects" }
	]

	return (
		<div className="mb-4 sm:mb-0">
			<ul className="flex flex-wrap -m-1">
				{tags.map((tag) => (
					<li className="m-1" key={tag.id}>
						<Link
							href={`${tag.name !== "All" ? `/${tag.id}/projects` : `/projects`}`}
							className={`inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border ${tag.id === selectedTag ? 'border-transparent shadow-sm bg-sky-500 text-white duration-150 ease-in-out' : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out'}`}
						>
							{tag.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}