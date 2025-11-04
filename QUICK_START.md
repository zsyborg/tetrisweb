# TETRIS Official Website - Quick Start

## 🚀 Setup (5 minutes)

### Step 1: Install Dependencies
```powershell
cd officialweb
pnpm install
```

### Step 2: Start Development Server
```powershell
pnpm dev
```

Visit `http://localhost:3000` in your browser!

## 📝 What's Included

✅ **Retro Landing Page** - Vibrant yellow/orange arcade aesthetic
✅ **Responsive Design** - Works on all devices
✅ **Animations** - Floating blocks, blinking text, smooth transitions
✅ **Feature Showcase** - Game features, token info, how to play
✅ **CTA Buttons** - Play Now, Buy Token, Start Playing
✅ **Social Links** - Discord, Twitter, Telegram footers
✅ **Modern Stack** - Next.js 14, TypeScript, Tailwind CSS

## 🎨 Design Features

### Colors
- **Primary Yellow**: `#FFE135` - Retro arcade style
- **Secondary Orange**: `#FF8C00` - Accent color
- **Dark Background**: `#1a1a2e` - Deep space feel
- **Light Text**: `#f0f0f0` - High contrast

### Fonts
- **Headers**: Press Start 2P (arcade retro)
- **Body**: VT323 (classic monospace)

### Effects
- Neon glow text shadows
- Floating block animations
- Blinking titles
- Retro button press effects (pixel-perfect)

## 📱 Sections

1. **Navigation** - Fixed header with menu
2. **Hero** - Eye-catching title with CTA buttons
3. **Game Features** - 3 feature cards with icons
4. **Token Info** - Token address, supply, network details
5. **How to Play** - 4-step quick guide
6. **Stats** - Player count, competitive badge, instant rewards
7. **Final CTA** - Large call-to-action button
8. **Footer** - Social links and copyright

## 🔧 Customization

### Update Links in `app/page.tsx`:

1. **Play Button** (line 40-42):
```tsx
<button className="btn-retro">
  ▶ PLAY NOW → {link to game}
</button>
```

2. **Buy Button** (line 43-45):
```tsx
<button className="btn-retro bg-retro-orange">
  ★ BUY TETRIS → {link to DEX}
</button>
```

3. **Social Links** (lines 178-181):
```tsx
<a href="https://discord.gg/XXXXX">Discord</a>
<a href="https://twitter.com/XXXXX">Twitter</a>
<a href="https://t.me/XXXXX">Telegram</a>
```

4. **Token Address** (line 94):
```tsx
<p>TETRIS.sol → {actual token address}</p>
```

5. **Token Supply** (line 99):
```tsx
<p>1,000,000,000 → {actual supply}</p>
```

## 🎬 Build for Production

```powershell
# Build
pnpm build

# Test production build locally
pnpm start
```

## 🌐 Deploy

### Option 1: Vercel (Recommended)
1. Push code to GitHub
2. Connect repo to Vercel
3. Auto-deploys on every push

### Option 2: Other Platforms
1. Run `pnpm build`
2. Deploy `.next` and `public` folders
3. Set Node.js version to 18+

## 📚 File Structure

```
officialweb/
├── app/
│   ├── page.tsx           # Main landing page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles + animations
├── public/                # Static assets (add logo here)
├── tailwind.config.ts     # Retro color theme
├── package.json
└── README.md
```

## ✨ Key Highlights

🎮 **Game-Focused** - Emphasizes fun and gameplay
💰 **Token Showcase** - Clear token information
🔗 **Blockchain Clear** - "Built on Solana" messaging
📊 **Social Proof** - Stats and community elements
⚡ **High Performance** - Minimal JS, optimized CSS

## 🚀 Next Steps

1. Add your logo to `public/` folder
2. Update all placeholder links
3. Connect Discord/Twitter/Telegram
4. Deploy to production
5. Share on social media!

---

**Questions?** Check `README.md` for detailed documentation.

**Built with ❤️ for TETRIS Token**
