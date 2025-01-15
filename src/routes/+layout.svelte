<script>
    import { page } from '$app/stores';
    import { afterUpdate } from 'svelte';
    let url = $page.url.pathname
    afterUpdate(() => url = $page.url.pathname)
    const menu = [
        {
            name: 'Home',
            href: '/'
        },
        {
            name: 'Lucia',
            href: '/demo/lucia'
        },
        {
            name: 'Cica',
            href: '/cica'
        }
    ]
</script>
<div class="menu">
    {#each menu as item}
        <a class={item.href === url ? 'active' : ''} href={item.href}>{item.name} ({item.href})</a>
    {/each}
</div>
<div class="container">
    <div class="content">
        <slot/>
    </div>
</div>
<style>
    :global(html, body) {
        margin: 0;
        position: absolute;
        top: 0;
        bottom: 24px;
        left: 0;
        right: 0;
    }
    div.container {
        float:inherit;
        background-color: aqua;
        margin: 0px;
        padding: 5px;
        height: 100%;
    }
    div.content {
        background-color: whitesmoke;
        margin: 10px;
        padding: 10px;
        border-radius: 15px;
        border: solid 1px black;
        text-align: center;
    }
    div.menu {
        padding: 10px;
        background-color: indigo;
        text-align: center;
    }
    a {
        all: unset;
        margin: 5px;
        padding: 5px;
        border-radius: 5px;
        cursor: pointer;
        color: salmon;
    }
    a:hover {
        color: hotpink;
    }
    a.active {
        background-color: hotpink;
        color: white;
    }
</style>