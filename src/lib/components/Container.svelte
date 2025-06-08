<script lang="ts">
	const { className = '', children } = $props();
</script>

<div class={`mx-auto max-w-7xl px-8 ${className}`}>
	{@render children()}
</div>
