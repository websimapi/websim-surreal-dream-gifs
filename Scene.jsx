import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { Gif } from "@remotion/gif";
const Scene = ({ src }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const scale = interpolate(
    frame,
    [0, durationInFrames / 2, durationInFrames],
    [1, 1.05, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  return /* @__PURE__ */ jsxDEV(
    AbsoluteFill,
    {
      style: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
      },
      children: /* @__PURE__ */ jsxDEV(
        Gif,
        {
          src,
          fit: "contain",
          style: {
            width: "100%",
            height: "100%",
            transform: `scale(${scale})`
          }
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 24,
          columnNumber: 7
        }
      )
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 17,
      columnNumber: 5
    }
  );
};
export {
  Scene
};
