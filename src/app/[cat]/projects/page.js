import getProjectMetadata from '@/components/getProjectMetadata';
import getProjectCats from '@/components/getProjectCats';
import ProjectCard from '@/components/projects/preview';
import Categories from '@/components/ui/categories';

export const metadata = {
	title: 'Projects',
	description: 'Projects',
}

export const getStaticPaths = async () => {
	const cats = getProjectCats();
	const paths = [
		...cats.map((cat) => (
			{ params: { cat: cat.id, abc: cat.name } }
		)),
	];
	return {
		paths,
		fallback: false,
	};
}

export default function CatPage(props) {

	const cat = props.params.cat;

	const projectMetadata = getProjectMetadata(cat).sort((a, b) => {
		return new Date(b.date) - new Date(a.date);
	});

	return (
		<div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">

			<div className="grow">

				<h1 className="h1 font-aspekta mb-12">Projects</h1>

				<div className="space-y-10">

					<Categories selectedCat={cat} />

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
