<script>
    let { data } = $props();
</script>
{#if data.user}
Bejelentkezve: {data.user?.username}
{:else}
Nincs bejelentkezve
{/if}