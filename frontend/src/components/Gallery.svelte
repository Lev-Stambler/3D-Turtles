<script lang="ts">
  import { getContext } from "svelte";
  import GalleryPopup from "./GalleryPopup.svelte";
  //@ts-ignore
  const { open } = getContext("simple-modal");
  const showPopup = () => open(GalleryPopup, {});
</script>

<button on:click={showPopup}>Minted Gallery</button>

<style>
  button {
    padding: 0.5rem;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    border: 0;
  }
</style>
