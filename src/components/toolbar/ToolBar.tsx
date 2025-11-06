import { Bars3Icon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { css, cx } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";
import IconButton from "../button/icon-button/IconButton";

const toolBarRecipe = cx(
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

const ToolBar = () => {
  return (
    <div className={toolBarRecipe}>
      <IconButton>
        <Bars3Icon
          className={css({
            color: "token(colors.icon)",
          })}
        />
      </IconButton>
      <IconButton>
        <EllipsisHorizontalIcon
          className={css({
            color: "token(colors.icon)",
          })}
        />
      </IconButton>
    </div>
  );
};

export default ToolBar;
