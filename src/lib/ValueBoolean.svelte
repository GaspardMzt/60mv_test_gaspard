<script>
	export let value;

	const handleClick = () => {
		value = !value;
	};
</script>

<div class="tooltip tooltip-right" data-tip="Value: {value ?? 'false'}">
	<input
		type="button"
		bind:value
		class="input input-bordered w-full border-accent"
		on:click={handleClick}
	/>
</div>
