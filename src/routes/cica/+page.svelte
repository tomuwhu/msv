<script>
    let { data } = $props();
</script>
<h1>Cica
    (<span>
        {#if data.user}
            ~ {data.user?.username} ~
        {:else}
            <span class="err"> &lt;&lt; Nincs bejelentkezve &gt;&gt;</span>
        {/if}
    </span>)
</h1>

<style>
h1 {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    margin-bottom: 5px;
    margin-top: 0px;
}
span {
    color: rgb(70, 159, 164);
}
span.err {
    color: red;
    font-size: 25px;
}
</style>