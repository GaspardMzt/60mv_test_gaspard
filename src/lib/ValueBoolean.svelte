<script>
	export let value;

	const handleClick = () => {
		value = !value;
	};
</script>

<div class="tooltip tooltip-right" data-tip="Value: {value ?? 'false'}">
	<!-- <input
		type="number"
		step="1"
		bind:value
		class="input input-bordered w-full border-accent"
		on:change={handleChange}
	/> -->
	<input
		type="button"
		bind:value
		class="input input-bordered w-full border-accent"
		on:click={handleClick}
	/>
</div>
