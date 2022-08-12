<script>
	export let value;

	$: inputString = value.slice(0, -8);

	let handleChange = (e) => {
		const userInput = e.target.value;
		const dateInLocale = new Date(userInput);
		const clientOffset = dateInLocale.getTimezoneOffset();
		const inputInUTCMs = dateInLocale.getTime() - clientOffset * 60000;
		value = new Date(inputInUTCMs).toISOString();
		inputString = value.slice(0, -8);

		console.log(`userInput: ${userInput}`);
		console.log(`Date in Locale :`);
		console.log(dateInLocale);
		console.log(`clientOffset : ${clientOffset}`);
		console.log(`inputInUTCMs : ${inputInUTCMs}`);
		console.log(`value : `);
		console.log(value);
		console.log(`inputString : `);
		console.log(inputString);
	};
</script>

<input
	type="datetime-local"
	bind:value={inputString}
	on:change={handleChange}
	class="input input-bordered w-full border-accent"
/>
