import { css } from "../../../../../styled-system/css";

const cardRecipe = css({
  borderRadius: "md",
  borderWidth: "1px",
  height: "5rem",
});

const Card = () => {
  return <div className={cardRecipe}>content</div>;
};

export default Card;
