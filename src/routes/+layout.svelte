<script>
    import { page } from '$app/stores';
    import { afterUpdate } from 'svelte';
    let url = $page.url.pathname
    afterUpdate(() => url = $page.url.pathname)
    const menu = [
        {
            name: 'Home - Kezdőoldal',
            href: '/'
        },
        {
            name: 'Lucia (Login / Registration)',
            href: '/demo/lucia'
        },
        {
            name: 'Cat - Cica',
            href: '/cica'
        },
        {   
            name: 'Drizzle példa (example)',
            href: '/form'
        }
    ]
    import './styles.css';
</script>
<div class="menu">
    {#each menu as item}
        <a class={item.href === url || item.href+"/login" === url ? 'active' : ''} href={item.href}>
            {item.name} 
            <!-- ({item.href}) -->
        </a>
    {/each}
</div>
<div class="container">
    <div class="content">
        <slot/>
    </div>
</div>
