<script>
    import { onMount } from 'svelte';
    import { on } from 'svelte/events';

    let { data } = $props()
    var i1 = $state('')
    var fv = $derived(
        i1 && i1.length > 1
    )
    var tdl = $state([])
    const x = async () => {
        tdl = await data.todolist
        /* console.log(
         $state.snapshot(tdl)
        ) */
    }
    onMount(() => x())
</script>
{#if data.user}
<h1>Todolist</h1>
<form method="post" action="?/new">
    <input 
        class={fv ? 'green' : 'red'} 
        name="x1" bind:value={i1}>
    <input class="del" disabled={!fv} type="submit" value="📌">
</form>
<ol>
{#each tdl as item}
    <li>
        <form class="del" method="post" action="?/update">
            {item.user}
            <input type="hidden" name="id" value={item.todos.id}>
            {#if item.uid == data.user.id}
                <input class="todo" name="v" type="text" value={item.todos.todo}>
            {:else}
                <input class="todo h" name="v" type="text" value={item.todos.todo} disabled>
            {/if}
        </form>
        {#if item.uid == data.user.id}
        <form class="del" method="post" action="?/delete">
            <input type="hidden" name="id" value={item.todos.id}>
            <input class="del" type="submit" value="🗑">
        </form>
        {/if}
    </li>
{/each}
</ol>
{:else}
    Nincs bejelentkezve
{/if}
<style>
form.del {
    display: inline-block;
}
input.del {
    all: unset;
    cursor: pointer;
}
input.del:hover {
    filter: drop-shadow(1px 1px 4px rgb(176, 138, 138));
}
input.todo {
    all: unset;
    text-align: left;
    font-family: 'Courier New', Courier, monospace;
}
input.todo.h {
    font-style: italic;
    color: rgb(74, 178, 178);
}
input.todo:hover {
    filter: drop-shadow(1px 1px 4px rgb(176, 138, 138));
}
ol {
  display: inline-block;
  width: 410px;
  background-color: rgb(206, 249, 235); 
  padding: 3px;
  margin: 7px;
  border-radius: 5px;
  box-shadow: 1px 1px 4px inset black;
  font-family: 'Courier New', Courier, monospace;
}
li {
    width: 400px;
    list-style-type:upper-roman;
    padding: 1px;
    margin: 3px;
    margin-left: 57px;
}
input.green, input.red {
    all: unset;
    text-align: left;
    padding: 3px;
    margin: 3px;
    border-radius: 5px;
    box-shadow: 1px 1px 4px inset black;
    font-family: 'Courier New', Courier, monospace;
}
input.green {
    background-color: rgb(165, 217, 165);
}
input.red {
    background-color: rgb(255, 215, 215);
}
</style>
