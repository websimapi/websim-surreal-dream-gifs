import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { createRoot } from "react-dom/client";
import { Player } from "@websim/remotion/player";
import { MyComposition } from "./composition.jsx";
const DURATION_PER_GIF_IN_FRAMES = 90;
const TRANSITION_DURATION_IN_FRAMES = 30;
const GIF_COUNT = 6;
const TOTAL_DURATION = GIF_COUNT * DURATION_PER_GIF_IN_FRAMES + (GIF_COUNT - 1) * TRANSITION_DURATION_IN_FRAMES;
const App = () => {
  return /* @__PURE__ */ jsxDEV(
    Player,
    {
      component: MyComposition,
      durationInFrames: TOTAL_DURATION,
      fps: 30,
      compositionWidth: 1080,
      compositionHeight: 1920,
      loop: true,
      controls: true,
      autoPlay: true,
      style: {
        width: "auto",
        height: "100%",
        aspectRatio: "1080 / 1920",
        maxWidth: "100%",
        maxHeight: "100vh"
      }
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 15,
      columnNumber: 5
    }
  );
};
createRoot(document.getElementById("app")).render(/* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
  fileName: "<stdin>",
  lineNumber: 35,
  columnNumber: 51
}));
