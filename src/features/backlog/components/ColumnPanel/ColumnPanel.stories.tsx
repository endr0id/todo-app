import ColumnPanel from "./ColumnPanel";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "features/Backlog/ColumnPanel",
  component: ColumnPanel,
  parameters: {
    layout: "centered",
  },
  args: {
    children: <div></div>,
  },
} satisfies Meta<typeof ColumnPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
