import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ComponentProps } from "react";

import CartIcon from "@/features/cart/components/CartIcon";

type StoryProps = ComponentProps<typeof CartIcon>;

const meta: Meta<StoryProps> = {
  component: CartIcon,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  render: () => {
    return <CartIcon></CartIcon>;
  },
};
