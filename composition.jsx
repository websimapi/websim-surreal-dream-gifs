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
  "/a/c4f69f08-df19-4945-a5c0-48044d1874a9",
  // asset_0 (12).gif
  "/a/8d5a6512-2ea4-49d9-be8a-f2addce10e1f",
  // asset_1 (12).gif
  "/a/52daad9c-44a3-4325-b47f-f40708e45639",
  // asset_2 (13).gif
  "/a/55a38eca-04e7-4564-90cb-78d8fbcdeec5",
  // asset_3 (8).gif
  "/a/980468b8-1091-4616-99da-8a6f40f9e92f",
  // asset_4 (12).gif
  "/a/45315ea0-b678-44a5-93c5-e27c75cb9676",
  // asset_5 (11).gif
  "/a/23333325-88cf-48b4-8206-bb80a54a7803",
  // asset_6 (12).gif
  "/a/a5a727c8-5b4d-4602-a59e-30654fd55ec6",
  // asset_7 (10).gif
  "/a/889c855e-bc8f-4442-805a-e21d1000bbcf",
  // asset_8 (11).gif
  "/a/237d9263-61b2-4046-aa81-bef9f14a4d60",
  // asset_9 (10).gif
  "/a/80d67a31-0ad7-4b4a-99d9-e68938a4c315",
  // asset_10 (10).gif
  "/a/c056c63e-25fa-4490-893b-ce20bf35f4ff",
  // asset_11 (9).gif
  "/a/f251f428-dcf1-4dd3-9553-5e2d7985080e",
  // asset_12 (10).gif
  "/a/e1b21af7-df17-4e6f-839a-26e642db2e6e",
  // asset_13 (11).gif
  "/a/8cda3bc8-0617-41e5-a7fc-6fb179fc9b32",
  // asset_14 (12).gif
  "/a/e8695fbc-9cef-41e0-b825-e859a7510ff8",
  // asset_15 (9).gif
  "/a/a7d29cb7-66a3-4c95-9879-3ca4679bbb49",
  // asset_16 (9).gif
  "/a/cfdc56f6-709d-4fce-add9-7bc0a43bbabc",
  // asset_17 (10).gif
  "/a/3e062066-3328-43f5-9e69-f8ff2d555bc1",
  // asset_18 (9).gif
  "/a/51bbfdd5-3841-4e7f-bb0d-b7bf2a88e18c",
  // asset_19 (8).gif
  "/a/07d959b5-3f1b-47b1-9208-55a171e0ea09",
  // asset_20 (7).gif
  "/a/dcd4d952-88e9-4306-8f5e-6ae140f06b9f",
  // asset_21 (6).gif
  "/a/5323cdc9-1676-46d6-b1e1-bed58d7995ba",
  // asset_22 (8).gif
  "/a/e07fd670-8367-4b12-8d76-cb2520f99d75"
  // asset_23 (7).gif
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
      lineNumber: 58,
      columnNumber: 15
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 57,
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
        lineNumber: 61,
        columnNumber: 15
      }
    )
  ] }, gifSrc, true, {
    fileName: "<stdin>",
    lineNumber: 56,
    columnNumber: 11
  })) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 54,
    columnNumber: 7
  }) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 53,
    columnNumber: 5
  });
};
export {
  MyComposition
};
