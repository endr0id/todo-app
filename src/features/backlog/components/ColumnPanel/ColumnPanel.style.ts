import { css } from "../../../../../styled-system/css";

export const columnPanelWrapper = css({
  display: "grid",
  gridTemplateRows: "3rem 1fr 3rem",
  borderRadius: "md",
  borderWidth: "1px",
  width: "22.5rem",
  height: "35rem",
  color: "token(colors.emphasis)",
  overflow: "hidden",
  backgroundColor: "black",
});

export const columnPanelHeaderRecipe = css({
  display: "flex",
  alignItems: "center",
  paddingX: "1rem",
  color: "white",
});

export const columnPanelContentsRecipe = css({});

export const columnPanelBottomRecipe = css({
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
