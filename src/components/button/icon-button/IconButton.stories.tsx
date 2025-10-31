import { Bars3Icon } from "@heroicons/react/24/outline";
import { fn } from "storybook/test";
import IconButton from "./IconButton";
import { css } from "../../../../styled-system/css";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/Button",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: <Bars3Icon className={css({ color: "token(colors.icon)" })} />,
    onClick: fn(),
  },
  argTypes: {
    children: {
      description: "Components provided by @heroicons/react",
      control: false,
    },
    onClick: {
      description: "Optional click handler",
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
