import { css } from "../../../styled-system/css";

const backlogWrapperRecipe = css({
  display: "flex",
  direction: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

const cardRecipe = css({
  display: "flex",
  gap: "5px",
});

const BacklogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={backlogWrapperRecipe}>
      <div className={cardRecipe}>{children}</div>
    </div>
  );
};

export default BacklogLayout;
