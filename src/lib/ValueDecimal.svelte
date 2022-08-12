<script>
	export let value;
	export let min;
	export let max;
	export let precision;

	const handleChange = (e) => {
		if (!isNaN(e.target.value)) {
			value = e.target.value;
			if (value < min) {
				value = min;
			}
			if (value > max) {
				value = max;
			}

			// Code initial provoquant bug sur la flèche supérieur :
			// if (!Number.isInteger((value - Math.trunc(value)) * Math.pow(10, precision)))
			if (value.toString().split('.')[1].length > precision) {
				let IntPart = Math.trunc(value);
				let DecimalPart = value - IntPart;
				let DecimalPartTruncated =
					Math.trunc(DecimalPart * Math.pow(10, precision)) / Math.pow(10, precision);
				value = IntPart + DecimalPartTruncated;
			}
		}
	};
</script>

<div
	class="tooltip tooltip-right"
	data-tip="Max: {max ?? 'none'} |  Min: {min ?? 'none'} | Precision: {precision ?? 'none'}"
>
	<input
		type="number"
		step={Math.pow(10, -precision || -1)}
		min={min ?? ''}
		max={max ?? ''}
		bind:value
		class="input input-bordered w-full border-accent"
		on:change={handleChange}
	/>
</div>
