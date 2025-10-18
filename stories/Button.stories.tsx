import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ComponentProps } from "react";

import Button from "@/components/Button/Button";

type StoryProps = ComponentProps<typeof Button> & {
  buttonText: string;
};

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
    href: "https://www.theloungeconjecture.com",
    opensInNewTab: true,
    size: "md",
    text: "Args text",
    variant: "primary",
    disabled: true,
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
  render: ({ buttonText, ...args }) => {
    return <Button {...args}></Button>;
  },
};
