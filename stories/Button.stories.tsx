import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ComponentProps } from "react";

import Button from "@/ui/button/Button";

type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: {
        type: "text",
      },
    },
    href: {
      control: {
        type: "text",
      },
    },
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg"],
    },
    text: {
      control: {
        type: "text",
      },
    },
    variant: {
      control: {
        type: "select",
      },
      options: ["primary", "secondary"],
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    className: "",
    href: "",
    opensInNewTab: true,
    size: "md",
    text: "Args text",
    variant: "primary",
    disabled: false,
  },
  render: ({ ...args }) => {
    return <Button {...args}></Button>;
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: "secondary",
  },
  render: ({ ...args }) => {
    return <Button {...args}></Button>;
  },
};
