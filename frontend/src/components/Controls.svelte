<script lang="ts">
  import type { Rational } from "../interfaces";
  import { rationalToStr } from "../math/rationals";

  import { createEventDispatcher } from "svelte";

  import { generateParams, parameters, controlParams } from "../store";
  import RationalButtonGroup from "./RationalButtonGroup.svelte";
  import { mint, signIn, signOut, getWalletConnection, near } from "../near";
  import InfoBlock from "./InfoBlock.svelte";

  let yaw: Rational, pitch: Rational, distance: Rational;
  $controlParams.numStepsPerLoop = 1;

  const dispatch = createEventDispatcher();

  // link to paper icon
  const toggleRunning = () => {
    $controlParams.running = !$controlParams.running;
  };

  const togglePreview = () => {
    $controlParams.displayPreview = !$controlParams.displayPreview;
  };

  const updateParams = () => {
    $parameters = generateParams(yaw, pitch, distance);
    $controlParams.running = false;
    dispatch("paramchange", {});
  };

  const copyShareUrl = async () => {
    const rationals = [yaw, pitch, distance].map(rationalToStr).join(";");
    const urlHashData = `${rationals};${$controlParams.pathWidth};${$controlParams.numStepsPerLoop}`;
    const url = `${location.href.split("#")[0]}#${urlHashData}`;
    try {
      await navigator.clipboard.writeText(url);
      alert(`Copied ${url} to clipboard. Share it with friends!`);
    } catch (e) {
      alert(
        `Failed to copy the URL to the clipboard. Manually share it with friends via ${url}`
      );
    }
  };

  let isSignedIn = getWalletConnection($near).isSignedIn();
  getWalletConnection($near)
    .isSignedInAsync()
    .then((signedIn) => (isSignedIn = signedIn));

  yaw = $parameters.initParams[0];
  pitch = $parameters.initParams[1];
  distance = $parameters.initParams[2];
</script>

<div class="wrapper">
  <section class="lhs">
    <button on:click={updateParams}>Reset</button>
    <button on:click={toggleRunning}
      >{$controlParams.running ? "Pause" : "Play"}</button
    >

    <input
      bind:value={$controlParams.pathWidth}
      type="range"
      min="0.01"
      max="2.5"
      step=".01"
    />
    {#if !$controlParams.allowControls}
      <section class="info">
        <InfoBlock />
      </section>
    {/if}

    {#if $controlParams.allowControls}
      <br />
      <label>
        speed:
        <input
          type="number"
          bind:value={$controlParams.numStepsPerLoop}
          min="1"
          max="100"
          step="1"
        />
      </label>

      <button on:click={togglePreview}
        >{$controlParams.displayPreview
          ? "hide preview"
          : "show preview"}</button
      >
      <RationalButtonGroup
        name="Yaw"
        bind:rational={yaw}
        on:paramchange={updateParams}
      />
      <RationalButtonGroup
        name="Pitch"
        bind:rational={pitch}
        on:paramchange={updateParams}
      />
      <!-- <RationalButtonGroup name="Distance" bind:rational={distance} on:paramchange={updateParams} /> -->
      <button on:click={copyShareUrl}>Share</button>
    {/if}
  </section>
  <div class="empty" />
  <div class="rhs">
    {#if $controlParams.allowControls}
      <section class="near">
        {#if !isSignedIn}
          <button on:click={() => signIn($near)}>
            <img src="/near-protocol-near-logo.svg" alt="Near Logo" />
            NEAR Sign In
          </button>
        {:else}
          <!-- TODO: disable if already minted... (check GCD etc.) -->
          <button
            on:click={() =>
              mint(
                $near,
                $parameters.initParams[0],
                $parameters.initParams[1],
                $controlParams.pathWidth,
                $controlParams.numStepsPerLoop
              )}
            id="mint--btn"
          >
            MINT
          </button>
          <button on:click={() => signOut($near)}>
            <img src="/near-protocol-near-logo.svg" alt="Near Logo" />
            NEAR Log out
          </button>
        {/if}
      </section>
      <section class="info">
        <InfoBlock />
      </section>
    {/if}
  </div>
</div>

<style>
  button {
    border: none;
    margin: none;
  }

  label {
    display: grid;
    grid-template-columns: 50px 100px;
  }

  input {
    border: none;
    background-color: aliceblue;
  }

  .wrapper {
    position: absolute;
    display: grid;
    grid-template-columns: auto auto auto;
    width: 10px;
    margin: 20px;
    gap: 5px;
    width: 100%;
    padding-left: 1rem;
    padding-right: 3rem;
    justify-content: space-between;
    box-sizing: border-box;
    pointer-events: none;
  }

  .wrapper .rhs {
    align-content: baseline;
  }
  .wrapper .near,
  .wrapper .info,
  .wrapper .lhs,
  .wrapper .rhs {
    min-width: 100%;
    width: fit-content;
    display: grid;
    gap: 0.4rem;
    pointer-events: all;
    display: grid;
    height: fit-content;
  }

  .wrapper .rhs {
    gap: 1rem;
  }

  .wrapper :global(button) {
    cursor: pointer;
  }
  .wrapper .rhs :global(button) {
    padding: 0.5rem;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  .wrapper :global(img) {
    height: 1rem;
    width: 1rem;
    padding-right: 0.5rem;
  }
  #mint--btn {
    background-color: rgb(0, 175, 0);
    color: white;
  }
</style>
