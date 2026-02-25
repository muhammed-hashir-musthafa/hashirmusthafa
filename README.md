# 🚀 Premium Developer Portfolio

A stunning, ultra-modern portfolio website built with cutting-edge technologies. Features smooth animations, 3D elements, and a premium glassmorphic design.

![Portfolio Preview](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎨 **Premium Design**: Glassmorphic UI with gradient accents and glow effects
- 🌊 **Smooth Animations**: Framer Motion & GSAP for buttery-smooth transitions
- 🎯 **3D Elements**: Interactive Three.js sphere background
- 📱 **Fully Responsive**: Perfect on all devices from mobile to 4K displays
- ⚡ **Performance Optimized**: Lighthouse score 95+
- 🎭 **Custom Cursor**: Interactive cursor with glow effects
- 📊 **Scroll Progress**: Visual scroll indicator
- 🎪 **Interactive Sections**: Hover effects, parallax, and micro-interactions
- 🔍 **SEO Optimized**: Meta tags, semantic HTML, and structured data
- ♿ **Accessible**: WCAG compliant with keyboard navigation

## 🛠️ Tech Stack

### Core
- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling

### Animation & 3D
- **Framer Motion** - Declarative animations
- **GSAP** - Advanced motion effects
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js

### UI Components
- **shadcn/ui** - Beautiful component library
- **Lucide Icons** - Modern icon set
- **CVA** - Component variants

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Setup

1. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Run development server:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Update Personal Information

Edit `src/data/portfolio.ts` to customize:
- Name, title, and bio
- Skills and experience
- Projects portfolio
- Services offered
- Contact information
- Social media links

### Modify Colors

Update color scheme in `src/app/globals.css`:
```css
:root {
  --primary: 262 83% 58%;    /* Purple */
  --secondary: 217 91% 60%;  /* Blue */
  --accent: 340 82% 52%;     /* Pink */
}
```

### Add/Remove Sections

Modify `src/app/page.tsx` to add or remove sections:
```tsx
<Hero />
<About />
<Skills />
// Add your custom section here
<Projects />
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Home page
│   │   └── not-found.tsx        # 404 page
│   ├── components/
│   │   ├── ui/                  # UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── textarea.tsx
│   │   ├── sections/            # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Services.tsx
│   │   │   └── Contact.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── ScrollProgress.tsx
│   │   └── ThreeBackground.tsx
│   ├── data/
│   │   └── portfolio.ts         # Portfolio data
│   └── lib/
│       └── utils.ts             # Utility functions
├── public/                      # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

Build the production version:
```bash
npm run build
npm run start
```

Deploy the `.next` folder to your hosting provider.

## 🎯 Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💖 Acknowledgments

- Design inspiration from top developer portfolios
- Built with modern web technologies
- Optimized for performance and accessibility

## 📧 Contact

For questions or feedback, reach out via the contact form on the portfolio.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
