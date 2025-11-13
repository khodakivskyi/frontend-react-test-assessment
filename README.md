# React UI Components Library

A modern React component library with dark theme, built with TypeScript and Vite. Features smooth animations, transitions, and responsive design.

## Setup

### Requirements

- Node.js >= 16.0.0
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/khodakivskyi/frontend-react-test-assessment
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
<img width="305" height="116" alt="image" src="https://github.com/user-attachments/assets/f22cfeae-8c3b-47ba-b031-c54de3eed61b" />

**Hover and Focus state:**
<img width="336" height="124" alt="image" src="https://github.com/user-attachments/assets/cf46de4f-3bb1-4920-8092-16050ac0c4e0" />

**Filled with clear button:**
<img width="396" height="110" alt="image" src="https://github.com/user-attachments/assets/10081605-0682-4858-b001-40148cd8089c" />

**Password with visibility toggle:**
<img width="369" height="103" alt="image" src="https://github.com/user-attachments/assets/d7276c50-1853-4335-bc41-57fc5aec1b6a" />
<img width="367" height="103" alt="image" src="https://github.com/user-attachments/assets/a2c4acd6-bbdf-4d6b-843b-89b5c1d6cf73" />

**Disabled state:**
<img width="306" height="105" alt="image" src="https://github.com/user-attachments/assets/51f113f6-9ba9-4142-a704-109c5b5f392f" />

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
<img width="508" height="138" alt="image" src="https://github.com/user-attachments/assets/ce915d39-eb9c-4e43-90e1-56956e4663e1" />

**Error toast:**
<img width="505" height="117" alt="image" src="https://github.com/user-attachments/assets/fdb267ad-f146-4458-902b-631f5cb424a8" />

**Warning toast:**
<img width="492" height="117" alt="image" src="https://github.com/user-attachments/assets/1229cc1d-a654-423f-8021-7238a71d6e1b" />

**Info toast:**
<img width="498" height="120" alt="image" src="https://github.com/user-attachments/assets/e23ed42a-55c2-4dc0-97c8-30c6d73d66da" />

**Toast with close button:**
<img width="496" height="131" alt="image" src="https://github.com/user-attachments/assets/03b9e921-cf02-404b-83ef-1b22abf6f05e" />

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

**Open one level menu:**
<img width="665" height="880" alt="image" src="https://github.com/user-attachments/assets/a640270f-0748-4bb5-8f03-80f81328e517" />

**Item hover:**
<img width="578" height="675" alt="image" src="https://github.com/user-attachments/assets/94f0ba81-01e6-40d7-9d15-2bed8b9c719d" />

**Two level menu:**
<img width="544" height="828" alt="image" src="https://github.com/user-attachments/assets/5ace0939-295e-429f-8f82-a27f9e6fa243" />

**Mobile version:**
<img width="371" height="717" alt="image" src="https://github.com/user-attachments/assets/bb96d77f-54d7-4ba6-80ae-4a20b07fc0c2" />

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
