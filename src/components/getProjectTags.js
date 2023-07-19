import getProjectMetadata from '@/components/getProjectMetadata';

const getProjectTags = () => {
	const projects = getProjectMetadata().sort((a, b) => {
		return new Date(b.date) - new Date(a.date);
	});
	const tagNames = [...new Set(projects.map(project => project.tags).flat())];
	const tagIds = tagNames.map((tag) => {
		tag = tag.toLowerCase();
		tag = tag.replace(/\s+|\/|\./g, '-');
		return tag;
	});
	const tags = tagNames.map((tag, index) => {
		return {
			name: tag,
			id: tagIds[index],
		}
	});
	return [
		{
			name: 'All',
			id: 'all',
		},
		...tags,
	];
}

export default getProjectTags;