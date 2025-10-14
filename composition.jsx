import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  TransitionSeries,
  linearTiming
} from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";
import { clockWipe } from "@remotion/transitions/clock-wipe";
import { Scene } from "./Scene.jsx";
const gifs = [
  "asset_0.gif",
  "asset_1.gif",
  "asset_2.gif",
  "asset_3.gif",
  "asset_4.gif",
  "asset_5.gif"
];
const DURATION_PER_GIF_IN_FRAMES = 90;
const TRANSITION_DURATION_IN_FRAMES = 30;
const transitions = [
  fade(),
  slide(),
  wipe(),
  clockWipe()
];
const MyComposition = () => {
  return /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: { backgroundColor: "black" }, children: /* @__PURE__ */ jsxDEV(TransitionSeries, { children: gifs.map((gifSrc, index) => /* @__PURE__ */ jsxDEV(React.Fragment, { children: [
    /* @__PURE__ */ jsxDEV(TransitionSeries.Sequence, { durationInFrames: DURATION_PER_GIF_IN_FRAMES, children: /* @__PURE__ */ jsxDEV(Scene, { src: gifSrc }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 40,
      columnNumber: 15
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 39,
      columnNumber: 13
    }),
    index < gifs.length - 1 && /* @__PURE__ */ jsxDEV(
      TransitionSeries.Transition,
      {
        timing: linearTiming({ durationInFrames: TRANSITION_DURATION_IN_FRAMES }),
        presentation: transitions[index % transitions.length]
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 43,
        columnNumber: 15
      }
    )
  ] }, gifSrc, true, {
    fileName: "<stdin>",
    lineNumber: 38,
    columnNumber: 11
  })) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 36,
    columnNumber: 7
  }) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 35,
    columnNumber: 5
  });
};
export {
  MyComposition
};
