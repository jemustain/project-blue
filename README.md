# 🏠 Ken's Corner

> Built by the World's Greatest Wife™

A Next.js 14 + Sanity v3 CMS site for Ken Richings, lovingly crafted by his impossibly talented wife Julie.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 🔗 Connecting Sanity

1. Create a Sanity project at [sanity.io/manage](https://www.sanity.io/manage)
2. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
3. Fill in your project ID and dataset name
4. Visit `/studio` to access the Sanity Studio
5. Add your content (or keep the hilarious placeholders — we won't judge)

## 📁 Structure

```
src/
├── app/
│   ├── page.tsx          # Home (hero + recent posts)
│   ├── about/            # About Ken (mostly about Julie)
│   ├── blog/             # Blog list + [slug] pages
│   ├── gallery/          # Image gallery
│   └── studio/           # Embedded Sanity Studio
├── components/           # Nav, Footer
├── lib/
│   ├── sanity.ts         # Sanity client config
│   └── placeholder.ts   # Hilarious placeholder content
└── sanity/
    └── schemas/          # Sanity document schemas
```

## 🎯 Schemas

- **Hero** — Homepage hero section
- **Post** — Blog posts with rich text
- **About** — About page content
- **Gallery Image** — Gallery items with captions

## 🚢 Deploy to Vercel

1. Push to GitHub
2. Import in [vercel.com](https://vercel.com)
3. Add environment variables
4. Deploy!

## 📝 Note

Currently uses static placeholder content. Once Sanity is connected, swap the imports in each page to use the Sanity client queries instead.

---

*"I don't understand half of what's in this README, but Julie says it's important." — Ken*
