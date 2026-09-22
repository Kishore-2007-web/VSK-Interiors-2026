# Contributing to VSK Interiors Web Project

Thank you for considering contributing to the **VSK Interiors** web project! Follow these guidelines to submit pull requests, report issues, and maintain codebase quality.

---

## 📋 Code of Conduct

Maintain a respectful, professional environment. All interactions should remain positive, polite, and respectful.

---

## 🛠️ How to Contribute

### 1. Reporting Bugs
- Use GitHub Issues to report bugs or layout anomalies.
- Provide step-by-step instructions to reproduce the issue.
- Include browser type, screen resolution, and console logs if applicable.

### 2. Feature & Design Suggestions
- Open an Issue detailing your proposed feature or improvement.
- Explain the user benefit and provide UI mockups if available.

### 3. Submitting Pull Requests (PRs)
1. Fork the repository and create a new feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Commit your changes with clear, descriptive commit messages:
   ```bash
   git commit -m "Add feature: Added custom wardrobe filter tab"
   ```
3. Push to your fork and submit a Pull Request targeting the `master` branch.

---

## 🎨 Code Style Guidelines

- **HTML**:
  - Maintain clean indentations (2 spaces).
  - Use semantic elements (`<header>`, `<section>`, `<article>`, `<footer>`).
  - Ensure all images have descriptive `alt` tags.

- **CSS & Tailwind**:
  - Prefer Tailwind utility classes for layout and spacing.
  - Keep custom component styling in `styles.css`.
  - Use CSS custom variables or Tailwind design tokens for color consistency.

- **JavaScript**:
  - Follow ES6+ syntax (`const`/`let`, arrow functions, template literals).
  - Ensure all event handlers check for element existence before binding.
  - Keep data arrays structured and easy to read.

---

## 📸 Image Guidelines for New Portfolio Items

When adding client project photos:
- Store original images in `port-proj/` folder.
- Optimize image sizes (recommended width: 1200px max, WebP or compressed JPG format).
- Provide a reliable fallback URL from Unsplash for online display safety.
