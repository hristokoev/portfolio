import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getProjectMetadata from '@/components/getProjectMetadata';
import TagsList from '@/components/projects/tags-list';
import WidgetProjects from '@/components/widget-projects';

const getProjectContent = (slug) => {
	const folder = 'src/projects/';
	const file = `${folder}${slug}.md`;
	const content = fs.readFileSync(file, 'utf8');
	const matterResult = matter(content);
	return matterResult;
}

export const generateMetadata = async ({ params }) => {
	const slug = params.slug;
	const project = getProjectContent(slug);
	return {
		title: `${project.data.title} - Projects`,
		description: project.data.subtitle,
	}
}

export const generateStaticParams = async () => {
	const projects = getProjectMetadata();
	return projects.map((project) => ({
		slug: project.slug
	}))
}

const ProjectPage = (props) => {

	const slug = props.params.slug;
	const project = getProjectContent(slug);

	return (
		<div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
			<section className="lg:w-[900px]">
				<h1 className="h1 font-aspekta pb-4 mb-6"><span className="bg-gradient-to-r from-green-300 via-sky-500 to-purple-500 bg-[length:100%_4px] bg-no-repeat bg-bottom">{project.data.title}</span></h1>

				{/* <div className="mb-6"> */}
					<TagsList metadata={[project.data]} />
				{/* </div> */}

				<article className="prose prose-slate dark:prose-invert max-w-none">

					<Markdown>{project.content}</Markdown>

				</article>
			</section>
			<aside className="md:w-[240px] lg:w-[300px] shrink-0">
				<div className="space-y-6">

					<WidgetProjects />

				</div>
			</aside>
		</div>
	)
}

export default ProjectPage;