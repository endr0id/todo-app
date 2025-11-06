import type { ButtonHTMLAttributes } from "react";
import { css, cx } from "../../../../styled-system/css";
import { flex } from "../../../../styled-system/patterns";

type IconButtonProps = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const iconButtonRecipe = cx(
  flex({
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }),
  css({
    borderRadius: "md",
    padding: "2px",
    width: "24px",
    height: "24px",
    cursor: "pointer",
    _hover: {
      backgroundColor: "gray.700",
    },
  }),
);

const IconButton = ({ children, onClick, ...props }: IconButtonProps) => {
  return (
    <button className={iconButtonRecipe} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default IconButton;
