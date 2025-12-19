# Running to God

> A Journey of Faith Through the Australian Outback

A Progressive Web App (PWA) built with Next.js, focused on helping people discover their relationship with Jesus through the lens of an Australian outback road trip from Perth to Port Lincoln.

## 🌏 About This Ministry

Running to God is part of the **Shame to Flame Ministry Family**, specifically focused on:
- **Jesus, the Son of God** — relationship, journey, and running into His arms
- Stories from a 2024 road trip across the Nullarbor Plain
- Campfire devotionals inspired by nights under the stars
- Bible studies focused on knowing Jesus personally

### Sister Sites
- [Shame to Flame](https://shametoflame.faith) — The umbrella ministry
- [Learn Live Forgive](https://learnliveforgive.faith) — God the Father, forgiveness
- [Project Reconcile](https://projectreconcile.faith) — The Holy Spirit, reconciliation

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📂 Project Structure

```
running-to-god/
├── app/                    # Next.js App Router pages
│   ├── journey/            # Road trip journey pages
│   ├── campfire-devotions/ # Evening devotionals
│   ├── bible-study/        # Bible study resources
│   ├── about/              # About the ministry
│   ├── contact/            # Contact form
│   └── layout.tsx          # Root layout with Nav/Footer
├── src/
│   ├── components/         # React components
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   └── data/               # Static data (will move to Sanity CMS)
│       └── journeyStops.ts
├── public/                 # Static assets
│   ├── manifest.json       # PWA manifest
│   └── sw.js               # Service worker
└── tailwind.config.js      # Tailwind with custom colors
```

## 🎨 Theme

The design uses a blue color palette from the logo:
- **Primary**: Sky blue (#0ea5e9)
- **Accents**: Outback ochre, ocean teal, campfire orange, night sky

## 🔧 Technologies

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **PWA**: Custom service worker
- **CMS**: Sanity.io (to be integrated)

## 📋 Roadmap

- [ ] Connect to Sanity CMS for content management
- [ ] Add user photos and videos from the road trip
- [ ] Implement prayer request functionality
- [ ] Add offline Bible reading support
- [ ] Create mobile app with Capacitor

## 📝 License

Copyright © 2024 Running to God Ministry. All rights reserved.

---

*"Draw near to God, and he will draw near to you." — James 4:8*
