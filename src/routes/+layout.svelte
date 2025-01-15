<script>
    import { page } from '$app/stores';
    import { afterUpdate } from 'svelte';
    let url = $page.url.pathname
    afterUpdate(() => {
        url = $page.url.pathname 
    })
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

{#each menu as item}
    <a class={item.href === url ? 'active' : ''} href={item.href}>{item.name} ({item.href})</a>
{/each}
<hr>
<slot/>
<hr>
<style>
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