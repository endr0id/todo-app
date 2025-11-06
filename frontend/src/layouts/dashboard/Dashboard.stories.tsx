import Dashboard from "./Dashboard";
import { css } from "../../../styled-system/css";
import type { Meta, StoryObj } from "@storybook/react-vite";

const divClass = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "md",
  borderWidth: "1px",
  width: "100%",
  height: "10rem",
});

const meta = {
  component: Dashboard,
  args: {
    children: (
      <>
        <div className={divClass}>div1</div>
        <div className={divClass}>div2</div>
        <div className={divClass}>div3</div>
        <div className={divClass}>div4</div>
        <div className={divClass}>div5</div>
        <div className={divClass}>div6</div>
      </>
    ),
  },
} satisfies Meta<typeof Dashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
