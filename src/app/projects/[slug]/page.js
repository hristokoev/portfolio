import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getProjectMetadata from '@/components/getProjectMetadata';

const getProjectContent = (slug) => {
	const folder = 'src/projects/';
	const file = `${folder}${slug}.md`;
	const content = fs.readFileSync(file, 'utf8');
	const matterResult = matter(content);
	return matterResult;
}

export const metadata = {
	title: 'Projects',
	description: 'Projects',
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
		<div>
			<h1 className="h1 font-aspekta mb-12">{project.data.title}</h1>
			<article className="prose prose-slate dark:prose-invert max-w-none">
				<Markdown>{project.content}</Markdown>
			</article>
		</div>
	)
}

export default ProjectPage;