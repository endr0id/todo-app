import { css } from "../../../../../styled-system/css";

// ----- Base -----
export const boardRecipe = css({
  display: "grid",
  gridTemplateRows: "4rem 1fr 3rem",
  borderRadius: "md",
  borderWidth: "1px",
  width: "22.5rem",
  height: "35rem",
  color: "token(colors.emphasis)",
  overflow: "hidden",
  backgroundColor: "black",
});

// ----- Header -----
export const boardHeaderRecipe = css({
  display: "flex",
  flexDirection: "column",
  paddingX: "1rem",
  paddingTop: "0.5rem",
});

export const boardTitleRecipe = css({
  color: "white",
});

export const boardDescription = css({
  display: "block",
  paddingBottom: "0.5rem",
  fontSize: "14px",
  color: "token(colors.subText)",
});

// ----- Contents -----
export const boardContentsRecipe = css({
  paddingX: "0.5rem",
});

// ----- Footer -----
export const boardFooterRecipe = css({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  paddingX: "1rem",
  color: "white",
  cursor: "pointer",
  _hover: {
    backgroundColor: "token(colors.hover)",
  },
});
