# Running to God 🛤️✝️

A Christian ministry website born from a road trip across the Nullarbor. Finding God on dusty roads, under starlit skies, and around the campfire.

## About the Project

**Running to God** is a Next.js website for a Christian ministry inspired by a transformative road trip from Perth, Western Australia to Port Lincoln, South Australia. The journey across the vast Nullarbor Plain became a metaphor for the spiritual journey we all take in life.

## Features

- 🌅 **Light/Dark Mode** - Toggle between a bright daytime theme and a starlit night theme
- 🗺️ **The Journey** - Follow the road from Perth to Port Lincoln with stops along the way
- 📖 **Daily Devotions** - Encouraging devotional content inspired by the journey
- 🏕️ **Campfire Stories** - Tales and lessons from the road
- 📧 **Contact Form** - Connect with the ministry
- 📱 **Fully Responsive** - Beautiful on all devices

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript

## Color Theme

The design is built around the ministry's logo - featuring cyan/teal blues representing the road stretching toward a cross on the horizon.

- **Light Mode**: Bright sky blues, clean whites, inspired by the open Australian sky
- **Dark Mode**: Deep navy night sky with stars, campfire warmth

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [your-repo-url]

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── about/           # About the ministry
│   ├── campfire/        # Campfire stories
│   ├── contact/         # Contact form
│   ├── devotions/       # Daily devotions
│   ├── journey/         # The road trip journey
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout with nav/footer
│   └── page.tsx         # Home page
├── components/
│   ├── Footer.tsx       # Site footer
│   ├── Logo.tsx         # SVG logo component
│   ├── Navigation.tsx   # Header navigation with theme toggle
│   └── Stars.tsx        # Animated stars for dark mode
└── context/
    └── ThemeContext.tsx # Light/dark mode state
```

## Pages

| Page | Description |
|------|-------------|
| `/` | Home page with hero, scripture, and ministry overview |
| `/journey` | Timeline of the road trip from Perth to Port Lincoln |
| `/devotions` | Daily devotional content |
| `/campfire` | Stories and reflections from the journey |
| `/about` | About the ministry and its mission |
| `/contact` | Contact form and information |

## License

This project is created for Running to God Ministry.

---

*"Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight."* — Proverbs 3:5-6
