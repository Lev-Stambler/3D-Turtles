import { writable, type Writable } from "svelte/store";
import type { Angle, Rational } from "./interfaces";
import {
  getRationalAngleIterator,
  getRationalDistanceIterator,
  precomputeRationalAngles,
  precomputeRationalDistances,
  rationalFromStr,
} from "./math/rationals";
import { getCurrentRationals } from "./turtle_utils";

export type StoredParameters = {
  initParams: [Rational, Rational, Rational];
  angles: Angle[];
  distance: IterableIterator<number>;
  distance_preview: number[];
};

export const default_angle_1: Rational = { n: 7, d: 213, b: 4 };
export const default_angle_2: Rational = { n: 21, d: 11, b: 9 };
export const default_distance: Rational = { n: 8, d: 9, b: 10 };

export const generateParams = (
  a1: Rational,
  a2: Rational,
  d: Rational
): any => {
  return {
    initParams: [a1, a2, d],
    angles: [
      {
        iterator: getRationalAngleIterator({
          n: a1.n,
          d: a1.d,
          b: a1.b,
        }),
        preview: precomputeRationalAngles({
          n: a1.n,
          d: a1.d,
          b: a1.b,
        }),
        base: a1.b,
        usage: [
          {
            dimension: "X",
            angleFn: "cos",
          },
          {
            dimension: "Y",
            angleFn: "sin",
          },
          {
            dimension: "Z",
            angleFn: "sin",
          },
        ],
      },
      // The below is an example of what adding in a 3rd angle looks like
      {
        iterator: getRationalAngleIterator({
          n: a2.n,
          d: a2.d,
          b: a2.b,
        }),
        preview: precomputeRationalAngles({
          n: a2.n,
          d: a2.d,
          b: a2.b,
        }),

        base: a2.b,
        usage: [
          {
            dimension: "X",
            angleFn: "sin",
          },
          {
            dimension: "Z",
            angleFn: "sin",
          },
        ],
      },
    ] as Angle[],
    distance: getRationalDistanceIterator({
      n: d.n,
      d: d.d,
      b: d.b,
    }),
    distance_preview: precomputeRationalDistances({
      n: d.n,
      d: d.d,
      b: d.b,
    }),
  };
};

export let parameters: Writable<StoredParameters> = writable(
  generateParams(default_angle_1, default_angle_2, default_distance)
);

export let controlParams: Writable<ControlParameters> = writable({
  running: false,
  pathWidth: 0.5,
  numStepsPerLoop: 1,
  sleepTimeMs: 10,
  displayPreview: true,
  allowControls: true,
});

// Parse URL parameters to set a default for the parameters
export const setParams = () => {
  try {
    const urlData = location.href.split("#")[1];
    const strs = urlData.split(";");
    const [yaw, pitch, distance] = strs.slice(0, 3).map(rationalFromStr);
    controlParams.update((params) => {
      params.pathWidth = parseFloat(strs[3]);
      params.numStepsPerLoop = parseInt(strs[4]);
      return {
        ...params,
        displayPreview: false,
        allowControls: false,
        running: true,
      };
    });
    parameters.set(generateParams(yaw, pitch, distance));
  } catch (e) {
    if (getCurrentRationals()) {
      let { r1, r2, distance } = getCurrentRationals();
      parameters.set(generateParams(r1, r2, distance));
    }
    controlParams.update((p) => {
      return { ...p, allowControls: true, displayPreview: true };
    });
    console.log("Could not parse URL params using defaults", e);
  }
};

export type ControlParameters = {
  running: boolean;
  pathWidth: number;
  numStepsPerLoop: number;
  sleepTimeMs: number;
  displayPreview: boolean;
  allowControls: boolean;
};
