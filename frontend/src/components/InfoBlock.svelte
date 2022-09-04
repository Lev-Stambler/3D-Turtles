<script lang="ts">
	import { getContext } from 'svelte';
import InfoPopup from './InfoPopup.svelte';
	 //@ts-ignore
  const { open } = getContext('simple-modal');
  const showPopup = () => open(InfoPopup, {});

</script>

<button on:click={showPopup}> What is this? </button>

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
