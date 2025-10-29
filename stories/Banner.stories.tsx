import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ComponentProps } from "react";

import Banner from "@/ui/banner/Banner";

type StoryProps = ComponentProps<typeof Banner>;

const meta: Meta<StoryProps> = {
  component: Banner,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: {
        type: "text",
      },
    },
    message: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    title: "guest book",
    message: "...drop your deets",
  },
  render: ({ ...args }) => {
    return <Banner {...args}></Banner>;
  },
};
