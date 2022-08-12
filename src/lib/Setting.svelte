<script>
    import Value from '$lib/Value.svelte';
    export let level = 0;
    export let setting;
    export let category;
    let open = false;

    function toggleOpen() {
        open = !open;
    }
</script>

<div>
    <h3 class="text-xl border-b border-secondary" class:isOpen={open} on:click={toggleOpen}>
        {category}
    </h3>
    {#if open}
        <div class="grid grid-cols-2">
            <div class="divider divider-horizontal"></div>
            <div>
                {#if setting.type}
                    <Value {...setting} />
                {:else}
                    {#each Object.entries(setting) as [category, subsetting]}
                        {#if category !== 'desc'}
                            <svelte:self category={category} setting={subsetting} level="{level + 1}"/>
                        {/if}
                    {/each}
                {/if}
            </div>
        </div>
    {/if}
</div>

<style lang="postcss">
    h3 {
        padding: 0.5em;
        margin-bottom: 1em;
        cursor: pointer;
        user-select: none;
    }

    h3:hover {
        @apply bg-primary-focus text-primary-content;
    }

    .isOpen {
        @apply border-primary;
    }

    .grid {
        grid-template-columns: 1fr 15fr;
    }
</style>