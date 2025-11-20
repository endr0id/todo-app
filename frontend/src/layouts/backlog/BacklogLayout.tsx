import { css } from "../../../styled-system/css";

const backlogContainerRecipe = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

const cardContainerRecipe = css({
  display: "flex",
  gap: "5px",
});

const BacklogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={backlogContainerRecipe}>
      <div className={cardContainerRecipe}>{children}</div>
    </div>
  );
};

export default BacklogLayout;
