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
<h1>Todolist</h1>
<form method="post">
    <input 
        class={i1 && i1.length > 6 ? 'green' : 'red'} 
        name="x1" bind:value={i1}>
    <br>
    <input disabled={!fv} type="submit" value="Elküld">
</form>
<ol>
{#each tdl as item}
    <li>{item.todo}</li>
{/each}
</ol>

<style>
ol {
  display: inline-block;
  width: 300px;
  background-color: aquamarine; 
  padding: 3px;
  margin: 7px;
  border-radius: 5px;
  box-shadow: 1px 1px 4px inset black;
}
li {
    list-style-type:upper-roman;
    padding: 1px;
    margin: 3px;
    margin-left: 57px;
    background-color: white;
}
input.green {
    background-color: rgb(165, 217, 165);
}
input.red {
    background-color: rgb(255, 215, 215);
}
</style>
