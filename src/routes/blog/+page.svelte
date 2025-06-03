<script lang="ts">
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
</script>

<h1>Blog</h1>

<ul>
  {#each data.articles as article}
    <li>
      <a 
        class="underline"
        href={`blog/${article.path}`}
      >
        {article.metadata.title}
      </a>
      Published at {article.metadata.date}
    </li>
  {/each}
</ul>