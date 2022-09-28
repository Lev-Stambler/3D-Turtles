<script lang="ts">
  import Modal from "svelte-simple-modal";

  import { parameters, controlParams, setParams } from "./store";
  import { near } from "./near";
  import {
    defaultPath,
    MAX_STEPS,
    previewPath,
    type PosType,
    type TurtlePath,
  } from "./interfaces";
  import {
    calcChangeInPosVec,
    generatePreviewPoints,
    resetPath,
  } from "./math/position";
  import {
    computeCylinders,
    getCentroid,
    recomputeCylinders,
    updateBounds,
  } from "./turtle_utils";

  import { SphereGeometry, Vector3, MeshStandardMaterial } from "three";
  import {
    AmbientLight,
    Canvas,
    DirectionalLight,
    Mesh,
    OrbitControls,
    PerspectiveCamera,
  } from "@threlte/core";

  import { GLTF } from "@threlte/extras";

  import Controls from "./components/Controls.svelte";
  import TurtlePathMesh from "./components/TurtlePathMesh.svelte";
  import { onMount } from "svelte";
  import { setNear } from "./near";
  import { init } from "svelte/internal";

  const sphereGeometry = new SphereGeometry(1);

  //////////////// ControlParams

  let displayPreview: boolean;
  let running: boolean;

  //////////////// TurtlePaths

  let path: TurtlePath = defaultPath;
  $: path.points = resetPath($parameters);
  $: path.cylinders = recomputeCylinders(path);

  let preview: TurtlePath = previewPath;
  $: preview.points = generatePreviewPoints($parameters);
  $: preview.cylinders = computeCylinders(preview);

  //////////////// Three js scene stuff

  let pos: PosType = [0, 0, 0];
  let steps: number = 0;

  const step = () => {
    if (steps < MAX_STEPS) {
      const [deltaX, deltaY, deltaZ] = calcChangeInPosVec($parameters);

      const newPos = [
        pos[0] + deltaX,
        pos[1] + deltaY,
        pos[2] + deltaZ,
      ] as PosType;
      path.points = [...path.points, new Vector3(...newPos)];
      path.cylinders = recomputeCylinders(path);
      path.bounds = updateBounds(new Vector3(...newPos), path.bounds);

      pos = newPos;
      steps += 1;
    }
  };

  const stepWrapper = () => {
    for (let i = 0; i < $controlParams.numStepsPerLoop; i++) {
      step();
    }
  };

  let timer_id: NodeJS.Timer;
  controlParams.subscribe((newParams) => {
    running = newParams.running;
    displayPreview = newParams.displayPreview;
    path.width = newParams.pathWidth;

    clearInterval(timer_id);
    if (running) {
      timer_id = setInterval(stepWrapper, newParams.sleepTimeMs);
    }
  });

  // called to reset entire state
  // called on parameter update from Controls.svelte
  const reset = () => {
    clearInterval(timer_id);
    pos = [0, 0, 0];
    steps = 0;
    path.bounds = {
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      minZ: 0,
      maxZ: 0,
    };
  };

  let loading = true;
  onMount(() => {
    const initUrl = window.location.href.split("?")[0];
    window.history.replaceState(null, null, initUrl);
    setNear().then(() => {
      setParams($near).then(() => (loading = false));
    });
  });
</script>

<!-- <svelte:body on:load={() => setParams()} /> -->

<Modal>
  <div class="wrapper">
    {#if loading || !$near}
      <div class="loading--wrapper"><div>Loading...</div></div>
    {:else}
      <!-- else content here -->
      <div class="container">
        <Controls on:paramchange={reset} />
        <Canvas rendererParameters={{ logarithmicDepthBuffer: true }}>
          <PerspectiveCamera
            fov={45}
            frustumCulled
            far={1000000000000000000000}
            position={{ x: 100, y: 100, z: 100 }}
          >
            <OrbitControls
              autoRotate
              autoRotateSpeed={0.05}
              enableDamping
              enablePan={false}
              zoomSpeed={1.5}
              target={getCentroid(path.bounds)}
            />
          </PerspectiveCamera>

          <AmbientLight intensity={0.7} />
          <DirectionalLight position={{ x: -15, y: 45, z: 20 }} />

          <TurtlePathMesh turtle={path} />
          {#if displayPreview}
            <TurtlePathMesh turtle={preview} />
          {/if}

          <!-- origin -->
          <Mesh
            geometry={sphereGeometry}
            material={new MeshStandardMaterial({ color: "black" })}
          />

          <!-- turtle head -->
          <GLTF
            url={"/3d-turtle.glb"}
            position={new Vector3(...pos)}
            scale={5}
          />
        </Canvas>
      </div>
    {/if}
  </div>
</Modal>

<style>
  :global(body) {
    overflow: hidden;
  }
  .loading--wrapper > div {
    height: min-content;
  }
  .loading--wrapper {
    display: grid;
    align-content: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
  }
  .container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
