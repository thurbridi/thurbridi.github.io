<script lang="ts">
	import Date from './Date.svelte';

	const { title, date, content } = $props();
</script>

<link
	rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
	integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
	crossorigin="anonymous"
/>

<article
	class="prose prose-zinc prose-invert prose-headings:font-serif prose-xl prose-headings:text-body prose-p:font-serif prose-p:text-body prose-p:text-xl prose-li:text-body prose-li:font-serif prose-li:text-xl mx-auto"
>
	<Date {date} className="font-serif text-lg" />
	<h1>{title}</h1>
	{@render content()}
</article>
