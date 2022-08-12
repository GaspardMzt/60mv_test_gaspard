<script>
	export let value;
	export let min;
	export let max;

	const handleChange = (e) => {
		if (!isNaN(e.target.value)) {
			value = e.target.value;
			// WHAT I HAVDE DONE :
			if (value < min) {
				value = min;
			}
			if (value > max) {
				value = max;
			}
		}
	};
</script>

<div class="tooltip tooltip-right" data-tip="Max: {max ?? 'none'} |  Min: {min ?? 'none'} ">
	<input
		type="number"
		step="1"
		min={min ?? ''}
		max={max ?? ''}
		bind:value
		class="input input-bordered w-full border-accent"
		on:change={handleChange}
	/>
</div>
