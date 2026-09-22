# VSK Interiors - Premium Interior Design Web Application

[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Location](https://img.shields.io/badge/Location-Ambattur%2C%20Chennai-blue.svg)](#contact)

Welcome to the official web application repository for **VSK Interiors** — Chennai's leading interior design studio located in Ambattur. This modern, interactive web platform showcases full-home transformation services, custom modular kitchens, wardrobes, living rooms, and bespoke interior solutions.

---

## 🌟 Key Features

- 🏙️ **Interactive Project Portfolio & Lightbox**:
  - Filterable portfolio categories (*Modular Kitchen, Living Room, Bedroom, Wardrobe, Home Office*).
  - Smooth horizontal scrolling carousel with touch and button controls.
  - High-resolution image lightbox modal with detailed project attributes and direct WhatsApp enquiry links.

- 📐 **Material & Engineering Specs Modal**:
  - Clickable service cards revealing technical details (primary core materials, hardware brands like Blum/Hafele, finish options, warranty terms, and handover timelines).

- 🔄 **Before vs. After Transformation Slider**:
  - Interactive dual-image slider enabling potential clients to visually compare raw civil structures against finished VSK luxury interiors.

- 💬 **WhatsApp Quick-Chat Widget**:
  - Floating WhatsApp action button with automated query options for instant consultation bookings and quick site measurement requests.

- 📝 **Consultation Request Form & Toast System**:
  - Form validation with animated submit states.
  - Non-blocking toast notification feedback engine.
  - Direct optional fallback to pre-filled WhatsApp messages.

- 📈 **Dynamic Animated Counters**:
  - Auto-incrementing statistics counter (*75+ Projects Done, 15+ Years Experience, 65+ Happy Clients, 98% Satisfaction*).

---

## 🛠️ Technology Stack

| Layer | Technology Used | Description |
| :--- | :--- | :--- |
| **Markup** | HTML5 | Semantic markup structured for optimal SEO and accessibility |
| **Styling** | Tailwind CSS CDN & Custom CSS | Responsive layout, custom glassmorphism, animations, and typography |
| **Logic** | Vanilla JavaScript (ES6+) | Lightweight client-side application logic without heavy framework dependencies |
| **Typography** | Google Fonts | `Playfair Display` (Headings) & `Inter` (Body text) |
| **Media Assets** | Unsplash & Local Portfolio Photos | Optimized photography showcasing client projects |

---

## 📁 Repository Structure

```text
VSK-Interiors-2026/
├── index.html        # Main single-page web application structure
├── styles.css        # Custom CSS styles, animations, and modal overlays
├── app.js            # Main JavaScript controller (Data stores, modals, sliders, events)
├── logo.svg          # Brand vector logo asset
├── port-proj/        # Local client project images directory
├── .gitignore        # Git ignore directives for OS, IDE, and log files
├── .editorconfig     # Code styling rules across editors
├── README.md         # Project documentation
├── CONTRIBUTING.md   # Guidelines for repository contributions
├── CHANGELOG.md      # Record of project updates and release notes
└── LICENSE           # Software license agreement
```

---

## 🚀 Quick Start & Local Development

This web application requires no complex build step or node package installations. It runs directly in any modern web browser.

### Option 1: Live Server (VS Code Extension)
1. Open the project folder in **VS Code**.
2. Right-click on `index.html` and click **Open with Live Server**.

### Option 2: Python Local HTTP Server
Run the following command in the project directory:

```bash
# Python 3.x
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

### Option 3: Node.js `serve` / `npx live-server`
```bash
npx live-server .
```

---

## ⚙️ Customization Guide

### Adding or Updating Portfolio Projects
Portfolio project data is managed in `app.js` within the `portfolioData` array:

```javascript
{
  id: 28,
  title: "Modern Modular Kitchen",
  category: "Modular Kitchen", // "Modular Kitchen" | "Living Room" | "Bedroom" | "Wardrobe" | "Home Office"
  year: "2026",
  location: "Ambattur, Chennai",
  img: "port-proj/your-image.jpg",
  fallback: "https://images.unsplash.com/photo-...",
  desc: "Detailed description of materials, finishes, and features."
}
```

### Updating Service Specifications
Service technical specs shown in the modal dialogs are configured in `app.js` under `serviceSpecs`:

```javascript
"Modular Kitchen": {
  title: "Modular Kitchen Solutions",
  materials: "100% Waterproof BWR Plywood / HDMR",
  hardware: "Hettich / Hafele Soft-Close Tandem Boxes",
  finishOptions: "High-Gloss Acrylic, Lacquered Glass, Textured Laminate",
  warranty: "10 Years Replacement Warranty",
  timeline: "25 - 35 Days",
  highlights: ["Ergonomic Work Triangle Layout", ...]
}
```

### Updating Contact Details & Phone Numbers
- **Phone Numbers**: Update `tel:+919444326403` and `wa.me/918838635463` references in `index.html` and `app.js`.
- **Address & Social Links**: Edit the footer section in `index.html`.

---

## 🌐 Deployment Options

### GitHub Pages
1. Push this repository to GitHub.
2. Navigate to **Settings** > **Pages**.
3. Select the `master` / `main` branch as source and root `/` folder.
4. Click **Save**. Your site will be live at `https://<username>.github.io/VSK-Interiors-2026/`.

### Vercel / Netlify
- Simply drag-and-drop the project folder or link your Git repository.
- No build command required; set publish directory to `./`.

---

## 📄 License

This project is released under the [MIT License](LICENSE).

---

## 📞 Contact VSK Interiors

- 📍 **Address**: Ambattur, Chennai, Tamil Nadu
- 📞 **Phone**: +91 8838635463 / +91 9444326403
- ✉️ **Email**: info@vskinteriorambt.com
- 📷 **Instagram**: [@vsk__.interiors](https://www.instagram.com/vsk__.interiors/)
