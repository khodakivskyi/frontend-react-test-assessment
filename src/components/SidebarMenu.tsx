import React, { useState, useEffect } from "react";
    import "../styles/SidebarMenu.css";

export type MenuItem = {
    id: string;
    label: string;
    icon?: string;
    children?: MenuItem[];
};

export type SidebarMenuProps = {
    items: MenuItem[];
    isOpen: boolean;
    onClose: () => void;
};

export const SidebarMenu = ({ items, isOpen, onClose }: SidebarMenuProps) => {
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const toggleItem = (id: string) => {
        setExpandedItems((prev) => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    };

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const renderMenuItem = (item: MenuItem, level: number = 0) => {
        const hasChildren = item.children && item.children.length > 0;
        const isExpanded = expandedItems.has(item.id);

        return (
            <li key={item.id} className="menu-item" style={{ paddingLeft: `${level * 20}px` }}>
                <div
                    className={`menu-item-header ${hasChildren ? "has-children" : ""}`}
                    onClick={() => hasChildren && toggleItem(item.id)}
                >
                    {item.icon && <span className="menu-icon">{item.icon}</span>}
                    <span className="menu-label">{item.label}</span>
                    {hasChildren && (
                        <span className={`menu-arrow ${isExpanded ? "expanded" : ""}`}>
              ▼
            </span>
                    )}
                </div>
                {hasChildren && (
                    <ul className={`menu-children ${isExpanded ? "expanded" : ""}`}>
                        {item.children!.map((child) => renderMenuItem(child, level + 1))}
                    </ul>
                )}
            </li>
        );
    };

    return (
        <>
            {isOpen && (
                <div className="sidebar-backdrop" onClick={handleBackdropClick}>
                    <aside className={`sidebar-menu ${isOpen ? "open" : ""}`}>
                        <div className="sidebar-header">
                            <h2>Menu</h2>
                            <button
                                type="button"
                                className="sidebar-close"
                                onClick={onClose}
                                aria-label="Close menu"
                            >
                                ×
                            </button>
                        </div>
                        <nav className="sidebar-nav">
                            <ul className="menu-list">
                                {items.map((item) => renderMenuItem(item))}
                            </ul>
                        </nav>
                    </aside>
                </div>
            )}
        </>
    );
};