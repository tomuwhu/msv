<script>
    let { data } = $props();
    let sound = $state({})
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

{#if data.user}
    <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
    <img onkeyUp={this.handleKeyUp} onclick={async () => {
        sound = {}
        let x = await fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action: 'cica'
            })
        })
        sound = await x.json();
        setTimeout(() => {
           sound = {} 
        }, 1000);
    }} 
    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRLM_YMOn41npXKC5fX-TSRfe20jO-nK1cfON36eskj5100UzlH4JMmJVsjNYxZPV4R0vw6DHIw0dqN-osUB5Iw7Q"
    alt="cica">
    <hr>
    {sound.animal}: {sound.message}
{/if}
<style>
h1 {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    margin-bottom: 15px;
    margin-top: 5px;
}
span {
    color: rgb(70, 159, 164);
}
span.err {
    color: red;
    font-size: 25px;
}
img {
    cursor: pointer;
    width: 600px;
    border-radius: 25px;
    box-shadow: 4px 4px 14px rgb(58, 16, 16);
}

</style>