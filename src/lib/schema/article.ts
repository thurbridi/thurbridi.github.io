import { z } from 'zod';

export { ArticleMetaSchema };
export type { ArticleMeta };

const ArticleMetaSchema = z.object({
	title: z.string(),
	date: z.union([
		z.string().refine((d) => !isNaN(Date.parse(d)), {
			message: 'Invalid date format'
		}),
		z.date()
	]),
	tags: z.array(z.string()).nonempty()
});

type ArticleMeta = z.infer<typeof ArticleMetaSchema>;
