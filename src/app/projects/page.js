import getProjectMetadata from '@/components/getProjectMetadata';
import ProjectCard from '@/components/projects/preview';
import Categories from '@/components/ui/categories';

export const metadata = {
	title: 'Projects',
	description: 'Projects',
}

export default function Projects() {

	const projectMetadata = getProjectMetadata().sort((a, b) => {
		return new Date(b.date) - new Date(a.date);
	});

	return (
		<div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">

			<div className="grow">

				<h1 className="h1 font-aspekta mb-12">Projects</h1>

				<div className="space-y-10">

					{/* WIP */}
					{/* <Categories selectedCat="all" /> */}

					<div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">

						{projectMetadata.length > 0 ? projectMetadata.map(project => (
							project.visible && <ProjectCard key={project.slug} {...project} />
						)) : (
							<div className="text-slate-400">No projects found.</div>
						)}

					</div>
				</div>

			</div>

		</div>
	)
}
