import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./stories/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  globalCss: {
    "html body": {
      backgroundColor: "black",
      color: "white",
      fontFamily: "NotoSansJP",
    },
  },

  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          subText: { value: "#9198A2" },
          emphasis: { value: "#3d444d" },
          icon: { value: "#9198a1" },
          hover: { value: "rgba(101, 108, 118, 0.2)" },
        },
      },
    },
  },

  globalFontface: {
    NotoSansJP: [
      {
        src: 'url(/public/fonts/static/NotoSansJP-Thin.ttf) format("ttf")',
        fontWeight: 100,
        fontStyle: "normal",
        fontDisplay: "swap",
      },
      {
        src: 'url(/public/fonts/static/NotoSansJP-ExtraLight.ttf) format("ttf")',
        fontWeight: 200,
        fontStyle: "normal",
        fontDisplay: "swap",
      },
      {
        src: 'url(/public/fonts/static/NotoSansJP-Light.ttf) format("ttf")',
        fontWeight: 300,
        fontStyle: "normal",
        fontDisplay: "swap",
      },
      {
        src: 'url(/public/fonts/static/NotoSansJP-Regular.ttf) format("ttf")',
        fontWeight: 400,
        fontStyle: "normal",
        fontDisplay: "swap",
      },
      {
        src: 'url(/public/fonts/static/NotoSansJP-Medium.ttf) format("ttf")',
        fontWeight: 500,
        fontStyle: "normal",
        fontDisplay: "swap",
      },
      {
        src: 'url(/public/fonts/static/NotoSansJP-SemiBold.ttf) format("ttf")',
        fontWeight: 600,
        fontStyle: "normal",
        fontDisplay: "swap",
      },
      {
        src: 'url(/public/fonts/static/NotoSansJP-Bold.ttf) format("ttf")',
        fontWeight: 700,
        fontStyle: "normal",
        fontDisplay: "swap",
      },
      {
        src: 'url(/public/fonts/static/NotoSansJP-ExtraBold.ttf) format("ttf")',
        fontWeight: 800,
        fontStyle: "normal",
        fontDisplay: "swap",
      },
      {
        src: 'url(/public/fonts/static/NotoSansJP-Black.ttf) format("ttf")',
        fontWeight: 900,
        fontStyle: "normal",
        fontDisplay: "swap",
      },
    ],
  },

  // The output directory for your css system
  outdir: "styled-system",
});
