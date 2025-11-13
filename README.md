# React UI Components Library

A modern React component library with dark theme, built with TypeScript and Vite. Features smooth animations, transitions, and responsive design.

## Setup

### Requirements

- Node.js >= 16.0.0
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tt
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Run Storybook:
```bash
npm run storybook
```

### Available Commands

- `npm run dev` - start development server
- `npm run build` - build for production
- `npm run preview` - preview production build
- `npm run lint` - check code quality
- `npm run storybook` - run Storybook on port 6006
- `npm run build-storybook` - build static Storybook

## Components

### Input

Universal input field component with support for different types, clearing, and password visibility toggle.

#### Features

- Support for types: text, password, number, email
- Controlled and uncontrolled modes
- Password visibility toggle
- Clear button
- Accessibility with aria-labels
- Smooth focus animations
- Dark theme by default

#### Props

```typescript
type InputProps = {
    label?: string;
    type?: "text" | "password" | "number" | "email";
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    clearable?: boolean;
    disabled?: boolean;
    onChange?: (value: string) => void;
    onClear?: () => void;
};
```

#### Usage

```tsx
import { Input } from './components/Input';

<Input
  label="Name"
  placeholder="Enter your name"
  clearable
/>

<Input
  type="password"
  label="Password"
  placeholder="Enter password"
/>
```

#### Screenshots

**Default state:**
<!-- Insert screenshot here -->

**Focus state:**
<!-- Insert screenshot here -->

**Hover state:**
<!-- Insert screenshot here -->

**Filled with clear button:**
<!-- Insert screenshot here -->

**Password with visibility toggle:**
<!-- Insert screenshot here -->

**Disabled state:**
<!-- Insert screenshot here -->

---

### Toast

Notification component with auto-dismiss and smooth animations.

#### Features

- 4 types: success, error, warning, info
- Configurable display duration
- Optional close button
- Smooth entrance/exit animation with bounce effect
- Backdrop blur for modern look
- Responsive design

#### Props

```typescript
type ToastProps = {
    message: string;
    type?: "success" | "error" | "warning" | "info";
    duration?: number;
    onClose?: () => void;
    showCloseButton?: boolean;
};
```

#### Usage

```tsx
import { Toast } from './components/Toast';

<Toast 
  message="Successfully saved!" 
  type="success"
  duration={3000}
/>

<Toast 
  message="Something went wrong" 
  type="error"
  showCloseButton
/>
```

#### Screenshots

**Success toast:**
<!-- Insert screenshot here -->

**Error toast:**
<!-- Insert screenshot here -->

**Warning toast:**
<!-- Insert screenshot here -->

**Info toast:**
<!-- Insert screenshot here -->

**Toast with close button:**
<!-- Insert screenshot here -->

**Entrance animation:**
<!-- Insert screenshot or GIF here -->

---

### SidebarMenu

Side menu with nested items support, animations, and backdrop blur.

#### Features

- Nested menus with unlimited depth
- Smooth open/close animations
- Backdrop blur effect
- Body scroll lock when open
- Close on backdrop click
- Custom scrollbar
- Visual hierarchy for nested items
- Responsive design (full width on mobile)

#### Types

```typescript
type MenuItem = {
    id: string;
    label: string;
    icon?: string;
    children?: MenuItem[];
};

type SidebarMenuProps = {
    items: MenuItem[];
    isOpen: boolean;
    onClose: () => void;
};
```

#### Usage

```tsx
import { SidebarMenu } from './components/SidebarMenu';

const menuItems = [
  {
    id: '1',
    label: 'Dashboard',
    icon: '📊'
  },
  {
    id: '2',
    label: 'Settings',
    icon: '⚙️',
    children: [
      { id: '2-1', label: 'Profile' },
      { id: '2-2', label: 'Security' }
    ]
  }
];

<SidebarMenu
  items={menuItems}
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
/>
```

#### Screenshots

**Closed menu:**
<!-- Insert screenshot here -->

**Open menu:**
<!-- Insert screenshot here -->

**Item hover:**
<!-- Insert screenshot here -->

**Expanded nested menu:**
<!-- Insert screenshot here -->

**Multi-level nested menu:**
<!-- Insert screenshot here -->

**Menu with backdrop:**
<!-- Insert screenshot here -->

**Mobile version (full width):**
<!-- Insert screenshot here -->
---

## Design System

### Color Palette

**Dark theme:**
- Background: `#111827`, `#1f2937`
- Text: `#f9fafb`, `#e5e7eb`, `#9ca3af`
- Borders: `#374151`, `#4b5563`
- Accent: `#60a5fa`, `#3b82f6`

**Toast gradients:**
- Success: `#059669` → `#047857`
- Error: `#dc2626` → `#b91c1c`
- Warning: `#d97706` → `#b45309`
- Info: `#2563eb` → `#1d4ed8`

### Animations

All components use:
- Cubic-bezier easing: `cubic-bezier(0.4, 0, 0.2, 1)`
- Bounce animation: `cubic-bezier(0.34, 1.56, 0.64, 1)`
- Duration: 200-400ms for optimal speed

### Typography

**System Font Stack:**
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 
             Roboto, 'Helvetica Neue', Arial, sans-serif;
```

## Technology Stack

- React 19
- TypeScript
- Vite
- Storybook
- CSS3

## Accessibility

All components follow accessibility principles:
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus states
- Screen reader support