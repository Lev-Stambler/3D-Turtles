import App from "./App.svelte";

import * as buffer from "buffer";
// issue of near-api-js
// https://github.com/near/near-api-js/issues/757
(window as any).Buffer = buffer.Buffer;
const app = new App({
  target: document.getElementById("app"),
});

export default app;
