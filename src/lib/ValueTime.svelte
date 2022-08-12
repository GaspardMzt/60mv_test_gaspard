<script>
	export let value;

	const handleChange = (e) => {
		value = e.target.value;
	};
</script>

<input
	type="time"
	bind:value
	class="input input-bordered w-full border-accent"
	on:change={handleChange}
/>
