# How to Update the Logo

The application now uses a logo image instead of a text-based logo.

## Current Setup

The logo is located at: `public/logo.svg`

## To Use Your Own Logo Image

1. **Add your logo image** to the `public` folder:
   - Supported formats: `.svg`, `.png`, `.jpg`, `.jpeg`
   - Recommended size: 50x50 pixels or similar aspect ratio
   - Recommended name: `logo.png` or `logo.svg`

2. **Update the Layout component** (`src/components/Layout.jsx`):
   - Change line 13 from: `<img src="/logo.svg" alt="Revionix Logo" className="logo-img" />`
   - To your image path: `<img src="/logo.png" alt="Revionix Logo" className="logo-img" />`

## Current Logo

The current logo is an SVG file that matches the blue-orange gradient theme:
- Blue: `#1e3a8a`
- Orange: `#f97316`
- Displays the letter "R" in a rounded square

## Styling

The logo is styled in `src/components/Layout.css` under `.logo-img`:
- Width: 50px
- Height: 50px
- Border radius: 12px

You can adjust these values if needed for your logo.
