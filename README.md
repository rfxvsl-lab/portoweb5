# Tomasz Gajda - Front-end Developer Portfolio

## 📋 Overview
A modern, minimalist personal portfolio website for Tomasz Gajda, a Front-end Developer and UI Designer. Features a striking monochromatic design with dark themes, sophisticated typography using Montserrat, and smooth interactive animations.

## ✨ Key Features

### 🎨 Design Elements
- **Color Scheme**: Dark charcoal (#1D1D1D) with light gray backgrounds (#E5E5E5)
- **Typography**: Montserrat (clean, geometric sans-serif)
- **Layout**: Single-page design with smooth section navigation
- **Animations**: 7 custom animations (fadeInUp, fadeInDown, slideInLeft, slideInRight, scaleIn, pulse, slideDown)
- **Icons**: FontAwesome 6.4.0 for social and tech icons

### 🚀 Functionality
- ✅ **Mobile Menu**: Responsive hamburger menu with auto-close on interaction
- ✅ **Smooth Scrolling**: Anchor link navigation with intelligent offset
- ✅ **Active Navigation**: Dynamic nav link highlighting based on scroll position
- ✅ **Form Validation**: Email validation and user feedback on contact form
- ✅ **Scroll Animations**: Intersection Observer for reveal effects on scroll
- ✅ **Portfolio Filtering**: Filter projects by category (All, Coded, Designed)
- ✅ **Back to Top**: Smooth scroll button with visibility toggle
- ✅ **Icon Interactions**: Grayscale hover effects on tech icons

### 📱 Sections

#### **Hero Section**
- Large introduction with name and title
- Social media links (Email, GitHub, LinkedIn)
- Profile image with grayscale effect
- Diagonal design element

#### **IT Berries Banner**
- Company/project showcase section
- Striped background pattern
- Call-to-action link

#### **About Me Section**
- Comprehensive introduction text
- Three service cards (Design, Development, Maintenance)
- Icon-based visual hierarchy
- Scroll down indicator

#### **Skills Section**
- **Using Now**: HTML5, CSS3, SASS, JavaScript, React, Bootstrap, Git, Figma
- **Learning**: NodeJS, MySQL, MongoDB, TypeScript
- **Other Skills**: Languages (English, Spanish) and Programming (C++, C)
- Color-coded icons with hover effects

#### **Portfolio Section**
- 6 featured projects with images
- Hover overlay with project details
- Filter functionality (All, Coded, Designed)
- Responsive grid layout

#### **Contact Section**
- Contact form with validation
- Clean input styling with underline borders
- Success message feedback
- Centered layout

#### **Footer**
- Animated "Back to Top" button
- Social media links (Facebook, LinkedIn, Instagram, Email)
- Copyright information

## 📁 File Structure

```
Portofolio-Website5/
├── index.html          # Main HTML file (680+ lines)
├── css/
│   └── style.css       # Custom styles & animations (300+ lines)
├── js/
│   └── main.js         # Interactive functionality (280+ lines)
└── README.md           # This file
```

## 🛠️ Technology Stack

- **HTML5**: Semantic markup with responsive design
- **Tailwind CSS**: CDN-based utility framework
- **Vanilla JavaScript**: Pure JS (no dependencies)
- **FontAwesome**: Icon library (6.4.0)
- **Google Fonts**: Montserrat typeface

## 🚀 Quick Start

### 1. **No Installation Required**
Simply open `index.html` in a modern web browser. All dependencies are loaded from CDN.

```bash
# Open in browser
start index.html  # Windows
open index.html   # macOS
xdg-open index.html  # Linux
```

### 2. **Live Server (Recommended)**
For better development experience with live reload:

```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Then visit: http://localhost:8000
```

## 🎨 Customization Guide

### Change Primary Color Scheme
Edit in HTML `<style>` tag and CSS file:

**In HTML `<style>`:**
```css
.section-title-box { border-color: #YOUR_COLOR; }
nav { color: rgba(YOUR_COLOR, 0.8); }
```

**In CSS file (`css/style.css`):**
```css
:root {
    --color-dark: #YOUR_COLOR;
}
```

### Update Content

**Hero Section**:
- Location: `index.html` lines 73-90
- Change name, title, description
- Update social media links

**About Section**:
- Location: `index.html` lines 130-165
- Update introduction text
- Modify service cards

**Skills Section**:
- Location: `index.html` lines 167-260
- Add/remove tech icons
- Update skill names and FontAwesome icons

**Portfolio**:
- Location: `index.html` lines 292-370
- Update project images and descriptions
- Change data-portfolio-category values
- Modify project names and tech stacks

**Contact Form**:
- Location: `index.html` lines 375-395
- Update form fields and labels
- Add email form submission endpoint

### Modify Animations
Edit `css/style.css` for timing and effects:

```css
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}
```

### Change Font
Update Google Fonts link in `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;600;700&display=swap" rel="stylesheet">
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (md breakpoint)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Mobile menu automatically appears on screens smaller than 768px.

## 🔧 JavaScript Functions

Located in `js/main.js`:

1. **`initMobileMenu()`** - Hamburger menu toggle and management
2. **`initSmoothScroll()`** - Smooth anchor link scrolling
3. **`initActiveNavLink()`** - Dynamic nav highlighting on scroll
4. **`initFormHandling()`** - Contact form validation
5. **`initScrollReveal()`** - Scroll-triggered animations
6. **`initBackToTop()`** - Back to top button functionality
7. **`initPortfolioFilter()`** - Portfolio filtering by category
8. **`initAll()`** - Initialize all functions on page load

## ✅ Browser Support

- Chrome/Chromium (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance Optimization

- CDN-based dependencies (no build required)
- Intersection Observer for lazy animation
- Minimal custom CSS (~300 lines)
- Optimized image loading
- Zero JavaScript dependencies
- Grayscale CSS filters for efficient icon handling

## 📝 SEO Basics

Meta tags included:
- Title: "Tomasz Gajda - Front-end Developer"
- Viewport meta for mobile responsiveness
- Semantic HTML5 structure

Enhance with:
- Add meta description tag
- Add open graph (og:) tags for social sharing
- Add structured data (schema.org JSON-LD)
- Optimize image alt text
- Add canonical tags

## 🐛 Troubleshooting

### Mobile menu not appearing
- Check `data-mobile-menu-btn` attribute on button
- Verify `data-mobile-menu` attribute on menu container
- Ensure CSS is properly linked

### Portfolio filtering not working
- Confirm `data-portfolio-filter` buttons have correct values
- Verify `data-portfolio-category` on portfolio items match filter values
- Check browser console for JavaScript errors

### Animations not displaying
- Ensure `css/style.css` is linked in `<head>`
- Verify animation class names match in CSS and JS
- Check browser console for CSS errors

### Form submission not working
- Currently form validates but doesn't submit (frontend validation only)
- Add backend endpoint or email service integration
- Update form action attribute for server submission

### Icons not showing
- Verify FontAwesome CDN link is active
- Check for network issues blocking CDN
- Inspect HTML for correct icon class names

## 📞 Social Links

- **Email**: [hello@tomaszgajda.com]
- **GitHub**: [github.com/tomaszgajda]
- **LinkedIn**: [linkedin.com/in/tomaszgajda]
- **Instagram**: [@tomaszgajda]

## 🚀 Future Enhancements

- [ ] Add form backend integration (Formspree, EmailJS)
- [ ] Implement dark mode toggle
- [ ] Add project detail pages
- [ ] Integrate CMS for dynamic content
- [ ] Add blog section
- [ ] Implement analytics tracking
- [ ] Add service worker for offline support

## 📄 License

This portfolio template is personal and created for Tomasz Gajda. Feel free to use as inspiration for your own portfolio.

---

**Created**: February 2026  
**Version**: 1.0  
**Last Updated**: February 8, 2026  
**Developer**: Professional Front-end Developer Portfolio Template
