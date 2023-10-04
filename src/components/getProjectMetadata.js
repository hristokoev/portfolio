import fs from 'fs';
import matter from 'gray-matter';

const getProjectMetadata = (cat) => {
	const folder = 'src/projects/';
	const files = fs.readdirSync(folder);
	let markdownProjects = files.filter((file) => file.endsWith('.md'));

	if (cat) {
		markdownProjects = markdownProjects.filter((project) => {
			const fileContents = fs.readFileSync(`${folder}${project}`, 'utf8');
			const matterResult = matter(fileContents);
			return matterResult.data.category.toLowerCase().replace(/\s+|\/|\./g, '-') == cat;
		});
	}

	// Get URL param for tag
	
	const projects = markdownProjects.map((markdownProject) => {
		const fileContents = fs.readFileSync(`${folder}${markdownProject}`, 'utf8');
		const matterResult = matter(fileContents);
		return {
			visible: matterResult.data.visible,
			title: matterResult.data.title,
			date: matterResult.data.date,
			subtitle: matterResult.data.subtitle,
			icon: matterResult.data.icon,
			thumb: matterResult.data.thumb,
			slug: markdownProject.replace('.md', ''),
			openSource: matterResult.data.openSource,
			tags: matterResult.data.tags,
			category: matterResult.data.category,
		}
	});

	return projects;
}

export default getProjectMetadata;