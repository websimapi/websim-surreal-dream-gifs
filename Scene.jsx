import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { Gif } from "@remotion/gif";
const Scene = ({ src, durationInFrames }) => {
  const frame = useCurrentFrame();
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
          style: {
            width: "100%",
            height: "100%",
            objectFit: "contain",
            transform: `scale(${scale})`
          }
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 23,
          columnNumber: 7
        }
      )
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 16,
      columnNumber: 5
    }
  );
};
export {
  Scene
};
