<script>
    export let value;
    export let min;
    export let max;
    export let precision;

    const handleChange = (e) => {
        // TODO
        value = e.target.value;
        // -------------------------
    }
</script>
<div class="tooltip tooltip-right" data-tip= "Max: {max ?? 'none'} |  Min: {min ?? 'none'} | Precision: {precision ?? 'none'}">
<!--    TODO -->
    {value}
<!--         -->
</div>
