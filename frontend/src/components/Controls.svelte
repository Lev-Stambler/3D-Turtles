<script lang="ts">
  import type { Rational } from "src/interfaces";
  import { rationalToStr } from "../math/rationals";

  import { createEventDispatcher } from "svelte";

  import { generateParams, parameters, controlParams } from "../store";
  import RationalButtonGroup from "./RationalButtonGroup.svelte";

  let yaw: Rational, pitch: Rational, distance: Rational;

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
    const urlHashData = `${rationals};${$controlParams.pathWidth}`;
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

  yaw = $parameters.initParams[0];
  pitch = $parameters.initParams[1];
  distance = $parameters.initParams[2];
</script>

<section>
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

  {#if $controlParams.allowControls}
    <br />
    <label>
      steps:
      <input
        type="number"
        bind:value={$controlParams.numStepsPerLoop}
        min="1"
        max="100"
        step="1"
      />
    </label>

    <button on:click={togglePreview}
      >{$controlParams.displayPreview ? "hide preview" : "show preview"}</button
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

  section {
    position: absolute;
    display: grid;
    width: 10px;
    margin: 20px;
    gap: 5px;
  }
</style>
