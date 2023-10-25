import Link from "next/link";
import getProjectCats from "../getProjectCats";

export default function Categories({ selectedCat }) {

	const categories = getProjectCats();

	return (
		<div>
			<div className="relative mb-8">
				<div className="absolute bottom-0 w-full h-px bg-slate-700" aria-hidden="true"></div>
				<ul className="relative text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar">
					{categories.map((cat) => (
						<li className="mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8" key={cat.id}>
							<Link className={`block pb-3 ${cat.id == selectedCat ? "text-sky-500 border-b-2 border-sky-500" : "text-slate-400 hover:text-slate-300"} whitespace-nowrap`} href={`${cat.name !== "All" ? `/${cat.id}/projects` : `/projects`}`}>{cat.name}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}