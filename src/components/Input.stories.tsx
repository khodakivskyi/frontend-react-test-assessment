import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "number", "email"],
    },
    clearable: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    label: "Name",
    type: "text",
    placeholder: "Enter your name",
    clearable: false,
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter password",
    clearable: false,
  },
};

export const Number: Story = {
  args: {
    label: "Age",
    type: "number",
    placeholder: "Enter age",
    clearable: false,
  },
};

export const Clearable: Story = {
  args: {
    label: "Search",
    type: "text",
    placeholder: "Enter search query",
    clearable: true,
  },
};

export const PasswordWithClear: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter password",
    clearable: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled field",
    type: "text",
    placeholder: "Not available",
    disabled: true,
    defaultValue: "Cannot edit",
  },
};

