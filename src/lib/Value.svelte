<script >
    import ValueDateTime from "./ValueDateTime.svelte";
    import ValueTime from "./ValueTime.svelte";
    import ValueInteger from "./ValueInteger.svelte";
    import ValueDecimal from "./ValueDecimal.svelte";


    export let value;
    export let type;
    export let min, max, precision;
   
</script>

{#if type === 'integer'}
    <ValueInteger bind:value min="{min}" max="{max}"/>
{:else if type === 'decimal'}
    <ValueDecimal bind:value min="{min}" max="{max}" precision="{precision}"/>
{:else if type === 'dateTime'}
    <ValueDateTime bind:value />
{:else if type === 'time'}
    <ValueTime bind:value />
{/if}