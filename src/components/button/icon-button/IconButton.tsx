import type { ButtonHTMLAttributes } from "react";
import { css } from "../../../../styled-system/css";

type IconButtonProps = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const iconButtonRecipe = css({
  borderRadius: "md",
  padding: "2px",
  width: "2rem",
  height: "2rem",
  cursor: "pointer",
  _hover: {
    backgroundColor: "gray.700",
  },
});

const IconButton = ({ children, onClick, ...props }: IconButtonProps) => {
  return (
    <button className={iconButtonRecipe} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default IconButton;
