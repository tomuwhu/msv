<script>
    let { data } = $props()
</script>
<h1>Ez lesz a form</h1>
{data.cica}
<form method="post">
    <input name="x1">
    <br>
    <input type="submit" value="Elküld">
</form>