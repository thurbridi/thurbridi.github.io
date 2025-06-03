import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const post = fetchPost(params.slug);

	return post;
};

async function fetchPost(slug: string) {
	try {
		const post = await import(`../../../content/articles/${slug}.md`);

		const { title } = post.metadata;
		const content = post.default;

		return {
			post: {
				title,
				content
			}
		};
	} catch {
		error(404, `Article not found: ${slug}`);
	}
}
