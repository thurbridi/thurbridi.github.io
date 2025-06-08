<script lang="ts">
  const {date, className = ""}: {date: string, className?: string} = $props();
  const d = new Date(date);

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
</script>

<time class={className}>{`${monthNames[d.getMonth()]} ${String(d.getDate()).padStart(2, "0")}, ${d.getFullYear()}`}</time>