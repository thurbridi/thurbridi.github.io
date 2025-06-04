import { json } from '@sveltejs/kit';
import { ArticleMetaSchema } from '$lib/schema/article';
import type { ArticleMeta } from '$lib/schema/article';

type MarkdownModule = {
	metadata: unknown;
	default: unknown;
};

export const GET = async () => {
	const articles = import.meta.glob<MarkdownModule>('/src/content/articles/*.md');

	const parsedArticles = (
		await Promise.all(
			Object.entries(articles).map(async ([path, resolver]) => {
				const { metadata } = await resolver();

				const parseResult = ArticleMetaSchema.safeParse(metadata);
				if (!parseResult.success) {
					console.warn(`Invalid metadata in ${path}:`, parseResult.error);
					return null; // Skip articles with invalid metadata
				}

				const articlePath = path.replace('/src/content/articles/', '').replace('.md', '');

				return {
					metadata: metadata as ArticleMeta,
					path: articlePath
				};
			})
		)
	).filter((value) => value !== null);

	const sortedArticles = parsedArticles.sort((a, b) => {
		return new Date(b.metadata.date).valueOf() - new Date(a.metadata.date).valueOf();
	});

	return json(sortedArticles);
};
