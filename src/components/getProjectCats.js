import getProjectMetadata from '@/components/getProjectMetadata';

const getProjectCats = () => {
	const projects = getProjectMetadata().sort((a, b) => {
		return new Date(b.date) - new Date(a.date);
	});
	const catNames = [...new Set(projects.map(project => project.category).flat())];
	const catIds = catNames.map((cat) => {
		cat = cat.toLowerCase();
		cat = cat.replace(/\s+|\/|\./g, '-');
		return cat;
	});
	const cats = catNames.map((cat, index) => {
		return {
			name: cat,
			id: catIds[index],
		}
	});
	return [
		{
			name: 'All',
			id: 'all',
		},
		...cats,
	];
}

export default getProjectCats;