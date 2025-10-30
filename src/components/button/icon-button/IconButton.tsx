import type { ButtonHTMLAttributes } from "react";
import { css } from "../../../../styled-system/css";

type IconButtonProps = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const iconButtonRecipe = css({
  borderColor: "token(colors.emphasis)",
  borderRadius: "md",
  borderWidth: "2px",
  padding: "2px",
  width: "2rem",
  height: "2rem",
});

const IconButton = ({ children, onClick, ...props }: IconButtonProps) => {
  return (
    <button className={iconButtonRecipe} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default IconButton;
