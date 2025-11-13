import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toast } from "./Toast";

const meta = {
    title: "Feedback/Toast",
    component: Toast,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {
        message: {
            control: "text",
        },
        type: {
            control: "select",
            options: ["success", "error", "warning", "info"],
        },
        duration: {
            control: "number",
        },
        showCloseButton: {
            control: "boolean",
        },
        onClose: {
            action: "closed",
        },
    },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
    args: {
        message: "Operation completed successfully!",
        type: "success",
        duration: 3000,
        showCloseButton: false,
    },
};

export const Error: Story = {
    args: {
        message: "An error occurred while performing the operation",
        type: "error",
        duration: 3000,
        showCloseButton: false,
    },
};

export const Warning: Story = {
    args: {
        message: "Warning! Please check the entered data",
        type: "warning",
        duration: 3000,
        showCloseButton: false,
    },
};

export const Info: Story = {
    args: {
        message: "New information available",
        type: "info",
        duration: 3000,
        showCloseButton: false,
    },
};

export const WithCloseButton: Story = {
    args: {
        message: "Message with close button",
        type: "info",
        duration: 0,
        showCloseButton: true,
    },
};

export const LongDuration: Story = {
    args: {
        message: "This message will be visible for 10 seconds",
        type: "info",
        duration: 10000,
        showCloseButton: true,
    },
};