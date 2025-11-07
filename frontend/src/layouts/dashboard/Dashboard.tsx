import { css, cx } from "../../../styled-system/css";
import { grid } from "../../../styled-system/patterns";

const dashboardRecipe = cx(
  grid({
    columns: 3,
    columnGap: "40px",
    rowGap: "40px",
  }),
  css({
    borderCollapse: "collapse",
    gridTemplateColumns: "1fr 4fr 1fr",
    width: "100%",
  }),
);

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={dashboardRecipe}>{children}</div>
    </>
  );
};

export default Dashboard;
