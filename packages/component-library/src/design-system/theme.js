import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["EB+Garamond", "sans-serif"],
  },
});

export const theme = {
  breakpoints: ["40em", "52em", "64em", "80em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 18, 20, 24, 36, 48, 80, 96],
  headingSizes: [24, 36, 48, 64, 96],
  fontWeights: [400, 700],
  sizes: {
    divider: [1, 2, 3, 4],
  },
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  letterSpacings: {
    normal: "normal",
    tracked: "0.1em",
    tight: "-0.05em",
    mega: "0.25em",
  },
  fonts: {
    serif: "EB Garamond, georgia, times, serif",
    sansSerif:
      'arial,  BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif',
  },
  borders: [
    0,
    "1px solid",
    "2px solid",
    "4px solid",
    "8px solid",
    "16px solid",
    "32px solid",
  ],
  radii: [0, 2, 4, 16, 9999, "100%"],
  width: [16, 32, 64, 128, 256],
  heights: [16, 32, 64, 128, 256],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors: {
    primary: "#72A826",
    secondary: "#391354",
    lightGrey: "#f7f7f7",
    mediumGrey: "#d3d3d3",
    gray: "#818181",
    border: "#dcdcdc",
    black: "#000",
    nearBlack: "#363636",
    "near-black": "#363636",
    "dark-gray": "#333",
    "mid-gray": "#555",
    silver: "#999",
    "light-silver": "#aaa",
    "moon-gray": "#ccc",
    "light-gray": "#eee",
    "near-white": "#f4f4f4",
    white: "#fff",
    transparent: "transparent",
    blacks: [
      "rgba(0,0,0,.0125)",
      "rgba(0,0,0,.025)",
      "rgba(0,0,0,.05)",
      "rgba(0,0,0,.1)",
      "rgba(0,0,0,.2)",
      "rgba(0,0,0,.3)",
      "rgba(0,0,0,.4)",
      "rgba(0,0,0,.5)",
      "rgba(0,0,0,.6)",
      "rgba(0,0,0,.7)",
      "rgba(0,0,0,.8)",
      "rgba(0,0,0,.9)",
    ],
    whites: [
      "rgba(255,255,255,.0125)",
      "rgba(255,255,255,.025)",
      "rgba(255,255,255,.05)",
      "rgba(255,255,255,.1)",
      "rgba(255,255,255,.2)",
      "rgba(255,255,255,.3)",
      "rgba(255,255,255,.4)",
      "rgba(255,255,255,.5)",
      "rgba(255,255,255,.6)",
      "rgba(255,255,255,.7)",
      "rgba(255,255,255,.8)",
      "rgba(255,255,255,.9)",
    ],
    buttons: {
      primary: {
        color: "white",
        bg: "red",
      },
      secondary: {
        color: "white",
        bg: "tomato",
      },
    },

    // ... and so on
  },
};

export default theme;
