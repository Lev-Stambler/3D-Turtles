<script lang="ts">
  import type { Token } from "../near";
  import { Tabs, Tab, TabList, TabPanel } from "svelte-tabs";
  import GalleryLine from "./GalleryLine.svelte";
  export let toks: Token[];
  export let showOwner = false;
</script>

{#if toks !== undefined}
  {#if toks.length === 0}
    <div class="noneFound">Looks like no NFTs were found...</div>
  {:else}
    {#each toks as tok}
      <GalleryLine {showOwner} token={tok} />
    {/each}
  {/if}
{/if}

<style>
  div.noneFound {
    display: grid;
    justify-content: center;
    align-items: center;
    margin: 2rem;
  }
</style>
