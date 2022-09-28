<script lang="ts">
  import type { Token } from "../near";

  export let showOwner = false;
  export let token: Token;
</script>

<div>
  <hr />
  {#if showOwner}
    {token.owner_id}:
  {/if}
  <a href={token.metadata.media} target="_blank"> {token.metadata.title}</a>
</div>

<style>
  a {
    text-decoration: none;
    color: rgb(64, 64, 190);
  }
  div {
    width: 100%;
    padding: 0.8rem;
  }
</style>
