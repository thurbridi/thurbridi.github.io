<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<article class="prose">
	<h1>{data.post.title}</h1>
	<data.post.content />
</article>
