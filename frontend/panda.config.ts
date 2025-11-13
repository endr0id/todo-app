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
    },
  },

  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          emphasis: { value: "#3d444d" },
          icon: { value: "#9198a1" },
          hover: { value: "rgba(101, 108, 118, 0.2)" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
