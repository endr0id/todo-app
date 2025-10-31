import { Bars3Icon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import Header from "./Header";
import { css } from "../../../styled-system/css";
import IconButton from "../button/icon-button/IconButton";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    children: (
      <>
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
      </>
    ),
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
