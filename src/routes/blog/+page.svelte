<script lang="ts">
	import ArticleThumbnail from '$lib/components/ArticleThumbnail.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<section class="flex flex-col gap-y-4">
	<h2 class="text-body font-serif text-xl font-semibold tracking-widest">latest articles</h2>

	<ul class="flex flex-row flex-wrap gap-16 px-4">
		{#each data.articles as article (article.path)}
			<li class="text-body font-serif">
				<ArticleThumbnail
					title={article.metadata.title}
					date={article.metadata.date}
					path={`blog/${article.path}`}
				/>
			</li>
		{/each}
	</ul>
</section>
