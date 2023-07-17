import getProjectMetadata from '@/components/getProjectMetadata';
import ProjectCard from '@/components/projects/preview';
import Link from 'next/link';

export default function ProjectsGrid() {

	const projectMetadata = getProjectMetadata()
		.sort((a, b) => { return new Date(b.date) - new Date(a.date); })
		.filter((project, index) => index < 6);

	return (
		<div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">

			<div className="grow">

				<h2 className="h2 font-aspekta mb-6">Stuff I&apos;ve made</h2>

				<div className="space-y-10">

					<div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-5">

						{projectMetadata.length > 0 ? projectMetadata.map(project => (
							<ProjectCard key={project.slug} {...project} />
						)) : (
							<div className="text-slate-500 dark:text-slate-400">No projects found.</div>
						)}

					</div>

					<div className="flex justify-center">
						<Link className="btn text-white bg-sky-500 hover:bg-sky-600" href="/projects">
							See all projects
						</Link>
					</div>

				</div>

			</div>

		</div>
	)
}
