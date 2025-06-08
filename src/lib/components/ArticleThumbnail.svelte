<script lang="ts">
	import Date from './Date.svelte';

	let { title, date, path } = $props();
</script>

<a href={path}>
	<Date {date} className="text-base" />
	<h1 class="text-xl font-semibold underline">
		{title}
	</h1>
</a>
