<script>
    var numbers = $state([1, 2, 3, 4, 6])
    var fv = $derived(
        numbers
            .filter(x => x % 2 === 0)
            .map(x => x ** 2)
            .join(" - ")
    )
</script>
<a href="/demo/lucia">lucia</a>
<hr>
{#each numbers as item, key}
    <input 
        type="number" 
        bind:value={numbers[key]}
        oninput={() => {
            if (numbers[key] === 0) {
                numbers.splice(key, 1)
            }
        }}
    >
{/each}
<button onclick={() => numbers = [...numbers, 1]}>+</button>
<hr>
{fv}
<style>
    input {
        width: 30px;
    }
</style>