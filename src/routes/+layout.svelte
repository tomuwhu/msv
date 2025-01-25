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
    import './styles.css';
</script>
<div class="menu">
    {#each menu as item}
        <a class={item.href === url || item.href+"/login" === url ? 'active' : ''} href={item.href}>{item.name} ({item.href})</a>
    {/each}
</div>
<div class="container">
    <div class="content">
        <slot/>
    </div>
</div>
