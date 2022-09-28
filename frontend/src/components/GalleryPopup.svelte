<script lang="ts">
  import {
    tokensByAccount,
    near,
    type Token,
    getAllTokens,
  } from "../near";
  import { Tabs, Tab, TabList, TabPanel } from "svelte-tabs";
  import GalleryLine from "./GalleryLine.svelte";
  import GalleryDisplayer from "./GalleryDisplayer.svelte";
  import { onMount } from "svelte";

  let showingByOwner = false;
  let loadingAllToks = true;
  let loadingByAccount = false;
  let accountId = null;
  let toksByAccount: Token[];
  let allToks: Token[];
  const findTokens = async (e: any) => {
    e.preventDefault();
    loadingByAccount = true;
    toksByAccount = await tokensByAccount($near, accountId);

    loadingByAccount = false;
  };

  const findAllTokens = async () => {
    allToks = await getAllTokens($near);
    loadingAllToks = false;
  };
  onMount(() => findAllTokens());
</script>

<div class="wrapper">
  <Tabs>
    <TabList>
      <Tab>By Owner</Tab>
      <Tab>All Mints</Tab>
    </TabList>

    <TabPanel>
      <h2>Search By Owner</h2>
      <form on:submit={findTokens}>
        <label for="#owner" style="margin-right: 20px;">Account:</label>
        <input
          type="text"
          bind:value={accountId}
          placeholder="john.near"
          id="owner"
        />
        <input type="submit" disabled={loadingByAccount} value="Find!" />
      </form>
      <GalleryDisplayer showOwner={false} toks={toksByAccount} />
    </TabPanel>
    <TabPanel>
      <h2>All Tokens</h2>
      {#if loadingAllToks}
        Loading all tokens...
      {:else}
        <GalleryDisplayer showOwner={true} toks={allToks} />
        <!-- promise was fulfilled -->
      {/if}
    </TabPanel>
  </Tabs>
</div>

<style>
  .wrapper {
    min-height: 500px;
  }

  :global(.svelte-tabs) {
    width: 100%;
  }
  :global(.svelte-tabs div.svelte-tabs__tab-panel) {
    width: 100%;
    display: grid;
    justify-content: center;
  }
</style>
