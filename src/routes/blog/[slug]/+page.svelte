<script lang="ts">
	import BlogArticle from '$lib/components/BlogArticle.svelte';

	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<BlogArticle title={data.post.title} date={data.post.date} content={data.post.content} />
