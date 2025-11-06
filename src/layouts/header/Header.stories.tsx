import Header from "./Header";
import { css } from "../../../styled-system/css";
import ToolBar from "../../components/toolbar/ToolBar";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    children: <ToolBar />,
  },
  decorators: [
    (Story) => (
      <div className={css({ backgroundColor: "#555555" })}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: {
      description: "Components provided by @heroicons/react",
      control: false,
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
