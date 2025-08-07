# JobJab Vault Landing Page

Official landing page for JobJab Vault - Weekly-Batch Liquidity Vault on Base L2

## 🌟 Features

- **Next.js 14**: App Router with TypeScript
- **Static Export**: Optimized for Vercel deployment  
- **Responsive Design**: Mobile, tablet, desktop optimized
- **Dark Mode**: Theme toggle with next-themes
- **Animations**: Framer Motion for smooth interactions
- **SEO Ready**: Meta tags and OG image support
- **QR Code**: Dynamic QR code generation
- **Modern UI**: Built with shadcn/ui components

## 📋 Sections

1. **Hero**: Value proposition with key features
2. **Pre-Deposit**: Early access and waitlist signup
3. **How It Works**: 4-step process explanation  
4. **Live Stats**: Real-time TVL, NAV, and performance metrics
5. **Roadmap**: Development phases and milestones
6. **CTA**: Call-to-action with trust indicators

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Development

\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

Visit: http://localhost:3000

### Build & Deploy

\`\`\`bash
# Type checking
npm run type-check

# Lint code
npm run lint

# Build for production
npm run build

# Static export for deployment
npm run build:static

# Deploy to Vercel
npm run deploy
\`\`\`

## 🔧 Configuration

### Environment Variables

No environment variables required - completely static.

### Customization

- **Colors**: Edit `tailwind.config.js` 
- **Content**: Update sections in `components/sections/`
- **Roadmap**: Modify `roadmap-section.tsx`
- **Links**: Update app URL in CTAs (currently points to app.jobjabvault.xyz)

## 📁 Structure

```
jobjab_vault_landing/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── privacy/
│   │   └── page.tsx        # Privacy policy
│   └── terms/
│       └── page.tsx        # Terms of service
├── components/
│   ├── layout/
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   ├── sections/
│   │   ├── hero-section.tsx
│   │   ├── predeposit-section.tsx
│   │   ├── how-it-works-section.tsx
│   │   ├── stats-section.tsx
│   │   ├── roadmap-section.tsx
│   │   └── cta-section.tsx
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── qr-code.tsx
│   │   └── separator.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── lib/
│   └── utils.ts
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#3b82f6)
- **Background**: Dynamic (light/dark)
- **Text**: Semantic colors

### Typography
- **Font**: Inter
- **Scale**: Tailwind default scale
- **Hierarchy**: h1-h4 with proper contrast

### Components
- Built with shadcn/ui
- Consistent spacing and styling
- Accessible by default

## 📱 Responsive Breakpoints

- **sm**: ≥ 640px (Mobile landscape)
- **md**: ≥ 768px (Tablet)  
- **lg**: ≥ 1024px (Desktop)
- **xl**: ≥ 1280px (Large desktop)

## 🔗 External Links

Current configuration points to:
- **App**: https://app.jobjabvault.xyz
- **Docs**: /docs (placeholder)
- **Social**: Discord, Twitter, GitHub (placeholder URLs)

## 📦 Dependencies

### Main Dependencies
- **Next.js**: ^14.2.31 (App Router, TypeScript support)
- **React**: ^18 (Latest stable version)
- **Framer Motion**: ^10.16.4 (Smooth animations)
- **Next Themes**: ^0.2.1 (Dark mode support)
- **Tailwind CSS**: ^3.3.0 (Utility-first CSS)
- **Radix UI**: Components primitives
- **Lucide React**: ^0.292.0 (Icons)
- **QRCode**: ^1.5.3 (QR code generation)

## ⚡ Performance

- **Next.js 14**: Latest optimizations and App Router
- **Static Export**: Ultra-fast loading with CDN support
- **Optimized Bundle**: Tree-shaking and code splitting
- **Responsive Images**: Optimized for all screen sizes
- **Minimal Dependencies**: Clean and lightweight

## 📄 SEO

- **Meta Tags**: Title, description, keywords
- **Open Graph**: Social media previews  
- **Twitter Cards**: Enhanced sharing
- **Structured Data**: Ready for implementation

## 🚢 Deployment

### Vercel (Recommended)

1. Connect repository
2. Set build command: `npm run build:static`
3. Set output directory: `out`
4. Deploy

### Other Static Hosts

Deploy the `out/` directory after running `npm run build:static`

## 🛠️ Development Scripts

\`\`\`bash
npm run dev          # Start development server
npm run build        # Build for production
npm run build:static # Build + static export
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
npm run deploy       # Deploy to Vercel
\`\`\`

## 🐛 Known Issues

- OG images need to be created and optimized
- Social media URLs are placeholders (Discord, Twitter, GitHub)
- Docs section needs implementation
- Environment variables documentation (if needed for production)

## 🔄 Updates

To update content:
1. **Sections**: Edit components in \`components/sections/\`
2. **Styling**: Modify \`tailwind.config.js\` or global CSS
3. **Content**: Update text and data in section components
4. **Pages**: Add new pages in \`app/\` directory
5. **Deploy**: Run \`npm run build:static\` and deploy

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: \`git checkout -b feature/new-feature\`
3. Commit changes: \`git commit -m 'Add some feature'\`
4. Push to branch: \`git push origin feature/new-feature\`
5. Submit a pull request

---

**Built for JobJab Vault** - Transparent DeFi Liquidity Management on Base L2  
🌐 [Website](https://jobjabvault.xyz) | 📱 [App](https://app.jobjabvault.xyz)