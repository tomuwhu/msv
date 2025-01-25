<script>
    let { data } = $props()
    var i1 = $state('Alap1')
    var i2 = $state('Alap2')
    var fv = $derived(
        i1 && i1.length > 6
        &&
        i2 && i2.length > 6
    )
</script>
<h1>Ez lesz a form</h1>
{data.cica}
<form method="post">
    <input 
        class={i1 && i1.length > 6 ? 'green' : 'red'} 
        name="x1" bind:value={i1}>
        <br>
        <input 
        class={i2 && i2.length > 6 ? 'green' : 'red'} 
        name="x2" bind:value={i2}>
    <br>
    <input disabled={!fv} type="submit" value="Elküld">
</form>
<style>
input.green {
    background-color: rgb(165, 217, 165);
}
input.red {
    background-color: rgb(255, 215, 215);
}
</style>
