# HomeQuest - Real Estate Website

A modern, responsive real estate website built with Svelte, Vite, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive FAQ Section**: Collapsible accordion with smooth animations
- **Contact Modal**: Professional contact form with validation
- **Smooth Scrolling**: Seamless navigation between sections
- **Accessibility**: WCAG compliant with proper ARIA attributes
- **Modern UI**: Clean, professional design with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend Framework**: Svelte 4
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Custom SVG icons
- **Deployment**: Static site ready

## 📁 Project Structure

```
fa tewst authtml/
├── src/                          # Source code
│   ├── App.svelte               # Main application component
│   ├── FaQs/                    # FAQ page components
│   ├── NavigationProperty1OnWhite/  # Navigation component
│   ├── ContactModal.svelte      # Contact modal component
│   ├── Footer/                  # Footer component
│   ├── styles.css               # Global styles
│   ├── tailwind.css             # Compiled Tailwind CSS
│   └── vars.css                 # CSS custom properties
├── public/                      # Static assets
│   ├── arrow.svg               # Arrow icons
│   ├── elements0.svg           # UI elements
│   ├── image0.png              # Hero background
│   ├── image1.png              # Contact section background
│   └── social-icons-*.svg      # Social media icons
├── assets/                      # Additional assets
│   ├── images/                 # Image files
│   └── icons/                  # Icon files
├── docs/                       # Documentation
├── dist/                       # Build output
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "fa tewst authtml"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📱 Mobile Functionality

- **Touch-friendly**: All interactive elements are optimized for touch devices
- **Responsive Navigation**: Clean navigation that works on all screen sizes
- **Smooth Scrolling**: Contact link smoothly scrolls to contact section
- **FAQ Accordion**: Touch-optimized FAQ section with proper accessibility
- **Contact Modal**: Mobile-friendly contact form with proper keyboard navigation

## ♿ Accessibility Features

- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Proper focus handling in modals
- **Semantic HTML**: Proper HTML structure for assistive technologies
- **Color Contrast**: WCAG compliant color combinations

## 🎨 Customization

### Colors
The project uses CSS custom properties for easy theming. Edit `src/vars.css` to change colors:

```css
:root {
  --theme-colors-color-01: #dbfb1e;  /* Primary accent */
  --theme-colors-color-02: #203f30;  /* Primary brand */
  --neutral-white: #ffffff;
  --neutral-neutral-01: #f7f6f4;
  --neutral-neutral-03: #52525a;
  --neutral-neutral-04: #0a0915;
}
```

### Fonts
The project uses Geist font family. You can customize fonts in `tailwind.config.js`.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:style` - Build Tailwind CSS
- `npm run preview` - Preview production build

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

- **Phone**: +21 934 748 392
- **Email**: hello@homequest.com
- **Address**: 940 Goldendale Dr, Wasilla, Alaska 99654, USA

---

Built with ❤️ using Svelte and Tailwind CSS 