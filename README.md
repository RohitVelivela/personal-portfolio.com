# Ramyashree Velivela Portfolio Website

A modern, responsive portfolio website for Ramyashree Velivela, a Senior Performance Analyst specializing in SCADA systems, Power BI, and industrial analytics.

## Project Structure

```
ramya-sri/
├── components/           # React components
│   ├── Contact.tsx       # Contact form component
│   ├── Education.tsx     # Education section component
│   ├── Experience.tsx    # Work experience timeline component
│   ├── Footer.tsx        # Footer component
│   ├── Hero.tsx          # Hero/landing section component
│   ├── Navbar.tsx        # Navigation bar component
│   ├── Projects.tsx      # Projects gallery component
│   └── Skills.tsx        # Skills showcase component
│
├── hooks/                # Custom React hooks
│   └── useWindowSize.ts  # Hook for responsive design
│
├── pages/                # Next.js pages
│   ├── _app.tsx          # Custom App component with ThemeProvider
│   ├── _document.tsx     # Custom Document component
│   └── index.tsx         # Main page component
│
├── public/               # Static assets
│   ├── fonts/            # Custom fonts
│   ├── images/           # Images used in the portfolio
│   └── resume.pdf        # Downloadable resume
│
├── styles/               # CSS styles
│   └── globals.css       # Global styles with Tailwind directives
│
├── types/                # TypeScript type definitions
│   └── index.ts          # Common type definitions
│
├── utils/                # Utility functions and data
│   ├── constants.ts      # Application constants
│   ├── data.tsx          # Portfolio data (skills, experiences, etc.)
│   └── theme.ts          # Theme utility functions
│
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Theming**: next-themes (dark/light mode)
- **Type Checking**: TypeScript

## Features

- Responsive design for all device sizes
- Dark/Light mode toggle
- Smooth scroll animations
- Interactive project filtering
- Vertical timeline for work experience
- Skill progress bars with search functionality
- Contact form with validation
- SEO optimized

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm run start
```

## Customization

To customize the portfolio content, modify the data files in the `utils/data.tsx` file.

## License

This project is licensed under the MIT License.
