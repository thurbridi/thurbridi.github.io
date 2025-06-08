<script lang="ts">
	import Background from '$lib/components/Background.svelte';
	import Container from '$lib/components/Container.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<Background />

<Header />

<Container className="py-8">
	{@render children()}
</Container>

<Footer />
