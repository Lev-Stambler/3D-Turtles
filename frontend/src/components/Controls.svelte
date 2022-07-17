<script lang="ts">
	import type { Rational } from 'src/interfaces';
	import { rationalFromStr, rationalToStr } from '../math/rationals';

	import { createEventDispatcher } from 'svelte';

	import {
		default_angle_1,
		default_angle_2,
		default_distance,
		generateParams,
		parameters,
		controlParams
	} from '../store';
	import RationalButtonGroup from './RationalButtonGroup.svelte';

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
		dispatch('paramchange', {});
	};

	const copyShareUrl = async () => {
		const rationals = [yaw, pitch, distance].map(rationalToStr).join(';');
		const urlHashData = `${rationals};${$controlParams.pathWidth}`;
		const url = `${location.href.split('#')[0]}#${urlHashData}`;
		try {
			await navigator.clipboard.writeText(url);
			alert(`Copied ${url} to clipboard. Share it with friends!`);
		} catch (e) {
			alert(`Failed to copy the URL to the clipboard. Manually share it with friends via ${url}`);
		}
	};

	yaw = $parameters.initParams[0];
	pitch = $parameters.initParams[1];
	distance = $parameters.initParams[2];
</script>

<section>
	<button on:click={updateParams}>Reset</button>
	<button on:click={toggleRunning}>{$controlParams.running ? 'Pause' : 'Play'}</button>
	<input type="range" bind:value={$controlParams.pathWidth} min="0.01" max="10" step=".01" />

	<!-- TODO: control this from URL param -->
	{#if $controlParams.allowControls}
		<button on:click={togglePreview}
			>{$controlParams.displayPreview ? 'hide preview' : 'show preview'}</button
		>
		<RationalButtonGroup name="Yaw" bind:rational={yaw} on:paramchange={updateParams} />
		<RationalButtonGroup name="Pitch" bind:rational={pitch} on:paramchange={updateParams} />
		<!-- <RationalButtonGroup name="Distance" bind:rational={distance} on:paramchange={updateParams} /> -->
		<button on:click={copyShareUrl}>Share</button>
	{/if}
</section>

<style>
	button {
		border: none;
		margin: none;
	}

	section {
		position: absolute;
		display: grid;
		width: 10px;
		margin: 20px;
		gap: 5px;
	}
</style>
