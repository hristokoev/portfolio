import fs from 'fs';
import matter from 'gray-matter';

const getProjectMetadata = () => {
	const folder = 'src/projects/';
	const files = fs.readdirSync(folder);
	const markdownProjects = files.filter((file) => file.endsWith('.md'));

	const projects = markdownProjects.map((markdownProject) => {
		const fileContents = fs.readFileSync(`${folder}${markdownProject}`, 'utf8');
		const matterResult = matter(fileContents);
		return {
			title: matterResult.data.title,
			date: matterResult.data.date,
			subtitle: matterResult.data.subtitle,
			icon: matterResult.data.icon,
			thumb: matterResult.data.thumb,
			slug: markdownProject.replace('.md', ''),
			openSource: matterResult.data.openSource,
			tags: matterResult.data.tags,
		}
	});

	return projects;
}

export default getProjectMetadata;