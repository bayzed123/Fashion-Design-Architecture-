# White-label Master Fashion Website Template

## 🌟 Project Overview

This project is a **White-label Master Fashion Website Template**, meticulously crafted to serve as a highly scalable and easily rebrandable boilerplate for high-end fashion brands. Developed with a focus on a clean, premium, and minimalistic UI, this template allows for rapid deployment and customization for various clients. The core idea is to enable a complete brand overhaul by simply modifying a single configuration file.

**Developed by:** Sayad Md Bayezid Hosan, Lead Consultant at "Connect With Bayezid" agency.

## ✨ Key Features

### Visuals & User Experience
*   **Dynamic Hero Section**: Engaging and customizable hero area to showcase featured collections or promotions.
*   **Lookbook/Gallery with Zoom**: An immersive visual experience for product showcases, allowing users to zoom in on details.
*   **Mobile-First Design**: Fully responsive layout ensuring a seamless experience across all devices.

### E-commerce Functionality
*   **Advanced Filtering**: Intuitive filtering options by size, color, and price to enhance product discovery.
*   **Smart Search**: Efficient search capabilities to help users quickly find desired items.
*   **Shopping Cart Logic**: Robust cart management for adding, updating, and removing products.

### Bangladesh Local Context
*   **Dynamic WhatsApp Checkout**: A unique feature that generates a pre-filled order message with product links and customer details, ready to be sent via WhatsApp for quick order confirmation.
*   **Local Payment Placeholders**: UI elements for popular local payment methods like bKash, Nagad, and Cash on Delivery (COD), ready for future integration.

### Architecture
*   **Modular Components**: Reusable UI components (e.g., `HeroSection`, `ProductCard`, `Cart`) for maintainability and scalability.
*   **Decoupled Content Structure**: Separation of content from presentation for easier management and updates.

## 💻 Tech Stack

*   **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **State Management**: [Zustand](https://zustand-zustand.netlify.app/) (for Cart management)

## 📁 Project Structure

```
.github/
public/
├── hero-bg.jpg
├── lookbook-1.jpg
├── ... (other lookbook and product images)
src/
├── app/                  # Next.js App Router pages and routes
│   ├── cart/
│   │   └── page.tsx
│   ├── checkout/
│   │   └── page.tsx
│   ├── lookbook/
│   │   └── page.tsx
│   ├── product/[id]/
│   │   └── page.tsx
│   ├── shop/
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/           # Reusable UI components
│   ├── Cart.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── Lookbook.tsx
│   ├── ProductCard.tsx
│   ├── ProductFilter.tsx
│   ├── ProductSearch.tsx
├── lib/                  # Utility functions
│   └── utils.ts
├── store/                # Zustand store for global state
│   └── useCartStore.ts
themeConfig.ts            # Central configuration for branding
tailwind.config.ts
tsconfig.json
package.json
GUIDELINE.md              # Detailed guidelines for customization and deployment
```

## ⚙️ Customization and Rebranding

### 1. The `themeConfig.ts` File

To rebrand the entire website, modify the `themeConfig.ts` file located in the root directory. This file centralizes all brand-specific elements:

*   **`brandName`**: Your brand's name.
*   **`logo`**: Path to your brand's logo (e.g., `/logo.svg`).
*   **`colors`**: Define primary, secondary, accent, background, and text colors.
*   **`fonts`**: Specify heading and body fonts.
*   **`socialLinks`**: Add URLs for your social media profiles.

**File Link:** [`themeConfig.ts`](./themeConfig.ts)

### 2. Global Styles and Fonts

Global styles and font imports are managed in `src/app/globals.css` and `src/app/layout.tsx`. Font variables are integrated with Tailwind CSS for consistent theming.

**File Links:**
*   [`src/app/globals.css`](./src/app/globals.css)
*   [`src/app/layout.tsx`](./src/app/layout.tsx)
*   [`tailwind.config.ts`](./tailwind.config.ts)

### 3. Component Customization

All UI components are modular and located in the `src/components` directory. You can modify them to fit your design needs.

**Key Component Files:**
*   [`src/components/Header.tsx`](./src/components/Header.tsx)
*   [`src/components/Footer.tsx`](./src/components/Footer.tsx)
*   [`src/components/HeroSection.tsx`](./src/components/HeroSection.tsx)
*   [`src/components/ProductCard.tsx`](./src/components/ProductCard.tsx)
*   [`src/components/ProductFilter.tsx`](./src/components/ProductFilter.tsx)
*   [`src/components/ProductSearch.tsx`](./src/components/ProductSearch.tsx)
*   [`src/components/Cart.tsx`](./src/components/Cart.tsx)
*   [`src/components/Lookbook.tsx`](./src/components/Lookbook.tsx)

### 4. Page Customization

Pages are located in the `src/app` directory. You can adjust their content and logic as required.

**Key Page Files:**
*   [`src/app/page.tsx`](./src/app/page.tsx) (Home Page)
*   [`src/app/shop/page.tsx`](./src/app/shop/page.tsx) (Shop Page)
*   [`src/app/product/[id]/page.tsx`](./src/app/product/[id]/page.tsx) (Product Detail Page)
*   [`src/app/cart/page.tsx`](./src/app/cart/page.tsx) (Shopping Cart Page)
*   [`src/app/checkout/page.tsx`](./src/app/checkout/page.tsx) (Checkout Page)
*   [`src/app/lookbook/page.tsx`](./src/app/lookbook/page.tsx) (Lookbook Page)

### 5. State Management

The cart state is managed using Zustand. The store definition can be found here:

**File Link:** [`src/store/useCartStore.ts`](./src/store/useCartStore.ts)

### 6. Utility Functions

Common utility functions, such as `cn` for combining Tailwind classes, are located in:

**File Link:** [`src/lib/utils.ts`](./src/lib/utils.ts)

## 🚀 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/). Simply connect your GitHub repository to Vercel, and it will automatically detect the Next.js project and deploy it.

For more detailed instructions on customization, setup, and deployment, please refer to the dedicated [GUIDELINE.md](./GUIDELINE.md) file.

---
