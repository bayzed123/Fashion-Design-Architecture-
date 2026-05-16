# White-label Master Fashion Website Template Guideline

Welcome to the **White-label Master Fashion Website Template**. This boilerplate is designed for high-end fashion brands, offering a scalable, premium, and easily rebrandable solution.

## 🚀 Getting Started

### 1. Rebranding (The "One-File" Magic)
To completely rebrand the website, you only need to modify the `themeConfig.ts` file in the root directory.

```typescript
// themeConfig.ts
export const themeConfig = {
  brandName: "Your Brand Name",
  logo: "/logo.svg",
  colors: {
    primary: "#000000", // Main brand color
    secondary: "#6B7280",
    accent: "#F87171",
    background: "#FFFFFF",
    text: "#1F2937",
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Inter', sans-serif",
  },
  socialLinks: {
    facebook: "https://facebook.com/yourbrand",
    instagram: "https://instagram.com/yourbrand",
    // ...
  },
};
```

### 2. Bangladesh Local Context
- **WhatsApp Checkout**: The checkout page includes a "Dynamic WhatsApp Checkout" button. It automatically generates a formatted order message with product details, sizes, colors, and customer info.
- **Payment Placeholders**: UI placeholders for **bKash**, **Nagad**, and **Cash on Delivery (COD)** are ready for future API integration.

## 🛠 Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: Zustand (for Cart logic)

## 📁 Project Structure
- `src/app`: Pages and routing.
- `src/components`: Modular UI components (Hero, ProductCard, Cart, etc.).
- `src/store`: Zustand store for global state.
- `src/lib`: Utility functions.
- `public`: Static assets (images, logos).

## 📦 Deployment on Vercel
1. Push your code to GitHub.
2. Connect your repository to Vercel.
3. Vercel will automatically detect Next.js and deploy.

## 📝 Future Customizations
- **Lookbook**: Update `src/app/lookbook/page.tsx` with your brand's high-quality photography.
- **Products**: Replace mock data in `src/app/shop/page.tsx` and `src/app/product/[id]/page.tsx` with your actual product API or CMS data.

---
*Developed for Sayad Md Bayezid Hosan - Lead Consultant at "Connect With Bayezid" agency.*
