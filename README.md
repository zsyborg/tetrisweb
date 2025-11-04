# TETRIS - Official Website

Official website for TETRIS, a retro gaming token on Solana blockchain.

## Features

✨ **Retro Design** - Vibrant yellow and orange colors with classic arcade aesthetic
🎮 **Responsive** - Works on desktop, tablet, and mobile
⚡ **Fast** - Built with Next.js 14 for optimal performance
🎨 **Tailwind CSS** - Custom retro theme with animations
🔗 **Solana Ready** - Showcase token and game information

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Package Manager**: pnpm
- **Fonts**: Press Start 2P (retro), VT323 (monospace)

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm installed globally

### Installation

```bash
# Install pnpm if not already installed
npm install -g pnpm

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The website will be available at `http://localhost:3000`

## Building for Production

```bash
# Build the project
pnpm build

# Start production server
pnpm start
```

## Project Structure

```
officialweb/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── public/             # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

## Customization

### Colors
Edit `tailwind.config.ts` to change the retro color scheme:
- `retro-yellow`: #FFE135
- `retro-orange`: #FF8C00
- `retro-dark`: #1a1a2e
- `retro-light`: #f0f0f0

### Fonts
- Retro buttons: `Press Start 2P`
- Main text: `VT323`

### Button Styles
Retro buttons use the `.btn-retro` class with hover and active states for classic arcade feel.

## Features Included

- **Hero Section**: Eye-catching landing with animated blocks
- **Game Features**: Showcase of game capabilities
- **Token Information**: Display token details and network info
- **How to Play**: 4-step guide
- **CTA Buttons**: Call-to-action for playing and buying tokens
- **Footer**: Social links and copyright

## Links to Update

Update these in `app/page.tsx`:

1. **Play Button**: Link to game (`/tetromino`)
2. **Buy Button**: Link to DEX (Magic Eden, Raydium, etc.)
3. **Social Links**: Discord, Twitter, Telegram
4. **Token Address**: Replace `TETRIS.sol` with actual address
5. **Token Supply**: Update to actual supply

## Performance

- ⚡ Optimized images and assets
- 🎯 Minimal JavaScript (mostly CSS animations)
- 📱 Mobile-first responsive design
- ♿ Semantic HTML for accessibility

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Deployment

### Vercel (Recommended)

```bash
# Push to GitHub, connect repo to Vercel
# Automatic deployments on every push
```

### Other Platforms

```bash
# Build
pnpm build

# Deploy the `.next` and `public` directories
# Set Node.js version to 18+
```

## License

MIT License - See LICENSE file

---

**Built with ❤️ for TETRIS Token on Solana**
