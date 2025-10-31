import { css, cx } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";

const headerToolBarRecipe = cx(
  flex({
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }),
  css({
    padding: "1rem",
    height: "32px",
  }),
);

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header>
      <div className={headerToolBarRecipe}>{children}</div>
    </header>
  );
};

export default Header;
