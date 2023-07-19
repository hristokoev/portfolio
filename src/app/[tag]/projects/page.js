import getProjectMetadata from '@/components/getProjectMetadata';
import ProjectCard from '@/components/projects/preview';
import TagsList from '@/components/ui/tags-list';

export const metadata = {
	title: 'Projects',
	description: 'Projects',
}

export default function TagPage(props) {

	const tag = props.params.tag;

	const projectMetadata = getProjectMetadata()
		.sort((a, b) => { return new Date(b.date) - new Date(a.date); })
		.filter((project) => {
			let tags = project.tags.map(tag => tag.toLowerCase().replace(/\s+|\/|\./g, '-'));
			return tags.includes(tag);
		});

	return (
		<div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">

			<div className="grow">

				<h1 className="h1 font-aspekta mb-12">All Projects</h1>

				<div className="space-y-10">

					<TagsList selectedTag={tag} />

					<div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">

						{projectMetadata.length > 0 ? projectMetadata.map(project => (
							<ProjectCard key={project.slug} {...project} />
						)) : (
							<div className="text-slate-500 dark:text-slate-400">No projects found.</div>
						)}

					</div>
				</div>

			</div>

		</div>
	)
}
