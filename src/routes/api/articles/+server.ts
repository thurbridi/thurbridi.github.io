import { json } from '@sveltejs/kit';

export const GET = async () => {
	const articles = import.meta.glob('/src/content/articles/*.md');

	const parsedArticles = await Promise.all(
		Object.entries(articles).map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const articlePath = path.replace('/src/content/articles/', '').replace('.md', '');
			return {
				metadata: metadata,
				path: articlePath
			};
		})
	);

	const sortedArticles = parsedArticles.sort((a, b) => {
		return new Date(b.metadata.date).valueOf() - new Date(a.metadata.date).valueOf();
	});

	return json(sortedArticles);
};
