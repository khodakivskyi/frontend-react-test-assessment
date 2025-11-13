import type { Meta, StoryObj } from "@storybook/react-vite";
import { SidebarMenu, type MenuItem } from "./SidebarMenu";
import { useState } from "react";

const meta = {
    title: "Navigation/SidebarMenu",
    component: SidebarMenu,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof SidebarMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

const oneLevelItems: MenuItem[] = [
    { id: "1", label: "Home", icon: "🏠" },
    { id: "2", label: "About", icon: "ℹ️" },
    { id: "3", label: "Contact", icon: "📞" },
    { id: "4", label: "Blog", icon: "📝" },
];

const twoLevelItems: MenuItem[] = [
    {
        id: "1",
        label: "Products",
        icon: "📦",
        children: [
            { id: "1-1", label: "Category 1" },
            { id: "1-2", label: "Category 2" },
            { id: "1-3", label: "Category 3" },
        ],
    },
    {
        id: "2",
        label: "Services",
        icon: "🛠️",
        children: [
            { id: "2-1", label: "Service 1" },
            { id: "2-2", label: "Service 2" },
        ],
    },
    {
        id: "3",
        label: "About Company",
        icon: "🏢",
        children: [
            { id: "3-1", label: "History" },
            { id: "3-2", label: "Team" },
            {
                id: "3-3",
                label: "Departments",
                children: [
                    { id: "3-3-1", label: "Sales Department" },
                    { id: "3-3-2", label: "Support Department" },
                ],
            },
        ],
    },
    { id: "4", label: "Contact", icon: "📞" },
];

const SidebarMenuWrapper = ({
                                items,
                                initialOpen,
                            }: {
    items: MenuItem[];
    initialOpen: boolean;
}) => {
    const [isOpen, setIsOpen] = useState(initialOpen);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                style={{
                    position: "fixed",
                    top: "20px",
                    left: "20px",
                    padding: "10px 20px",
                    zIndex: 999,
                }}
            >
                Open Menu
            </button>
            <SidebarMenu items={items} isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
};

export const OneLevel: Story = {
    args: {
        items: oneLevelItems,
        isOpen: true,
        onClose: () => {},
    },
    render: (args) => (
        <SidebarMenuWrapper items={args.items} initialOpen={args.isOpen} />
    ),
};

export const TwoLevel: Story = {
    args: {
        items: twoLevelItems,
        isOpen: true,
        onClose: () => {},
    },
    render: (args) => (
        <SidebarMenuWrapper items={args.items} initialOpen={args.isOpen} />
    ),
};

export const Closed: Story = {
    args: {
        items: twoLevelItems,
        isOpen: false,
        onClose: () => {},
    },
    render: (args) => (
        <SidebarMenuWrapper items={args.items} initialOpen={args.isOpen} />
    ),
};