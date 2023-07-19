import fs from 'fs';
import matter from 'gray-matter';

const getProjectMetadata = (tag) => {
	const folder = 'src/projects/';
	const files = fs.readdirSync(folder);
	let markdownProjects = files.filter((file) => file.endsWith('.md'));

	if (tag) {
		markdownProjects = markdownProjects.filter((project) => {
			const fileContents = fs.readFileSync(`${folder}${project}`, 'utf8');
			const matterResult = matter(fileContents);
			const tags = matterResult.data.tags.map(tag => tag.toLowerCase().replace(/\s+|\/|\./g, '-'));
			return tags.includes(tag);
		});
	}

	// Get URL param for tag
	
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