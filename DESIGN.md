---
name: Ethereal Dark Shop
colors:
  surface: "#151310"
  surface-dim: "#151310"
  surface-bright: "#3b3936"
  surface-container-lowest: "#0f0e0b"
  surface-container-low: "#1d1b18"
  surface-container: "#211f1c"
  surface-container-high: "#2c2a27"
  surface-container-highest: "#373431"
  on-surface: "#e7e1dd"
  on-surface-variant: "#c7c7bc"
  inverse-surface: "#e7e1dd"
  inverse-on-surface: "#32302d"
  outline: "#919187"
  outline-variant: "#46473f"
  surface-tint: "#c4caaa"
  primary: "#c4caaa"
  on-primary: "#2d331d"
  primary-container: "#8e9477"
  on-primary-container: "#272c16"
  inverse-primary: "#5b6147"
  secondary: "#c9c6c1"
  on-secondary: "#31302d"
  secondary-container: "#484743"
  on-secondary-container: "#b8b5b0"
  tertiary: "#c7c6c5"
  on-tertiary: "#2f3130"
  tertiary-container: "#90918f"
  on-tertiary-container: "#292a29"
  error: "#ffb4ab"
  on-error: "#690005"
  error-container: "#93000a"
  on-error-container: "#ffdad6"
  primary-fixed: "#e0e6c5"
  primary-fixed-dim: "#c4caaa"
  on-primary-fixed: "#181e09"
  on-primary-fixed-variant: "#444931"
  secondary-fixed: "#e6e2dd"
  secondary-fixed-dim: "#c9c6c1"
  on-secondary-fixed: "#1c1c19"
  on-secondary-fixed-variant: "#484743"
  tertiary-fixed: "#e3e2e0"
  tertiary-fixed-dim: "#c7c6c5"
  on-tertiary-fixed: "#1a1c1b"
  on-tertiary-fixed-variant: "#464746"
  background: "#151310"
  on-background: "#e7e1dd"
  surface-variant: "#373431"
  soft-sage: "#81876B"
  suede: "#EFEBE6"
  flour: "#FCFBF9"
  carbon: "#282623"
  carbon-muted: "#32302D"
  sale-red: "#BC544B"
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: "400"
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: "400"
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 28px
    fontWeight: "400"
    lineHeight: 36px
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: "400"
    lineHeight: 32px
  title-lg:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: "600"
    lineHeight: 28px
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  label-lg:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: "500"
    lineHeight: 20px
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: "500"
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

This design system establishes a luxurious, "comfy-minimalist" aesthetic tailored for a high-end e-commerce experience. It bridges the gap between serene, nature-inspired storytelling and a sophisticated dark-mode interface. The emotional goal is to evoke a sense of "quiet luxury"—calm, premium, and effortless.

The visual style is a blend of **Minimalism** and **Glassmorphism**, emphasizing high-quality product photography against deep, organic textures. By utilizing soft edges, translucent layers, and a muted, botanical palette, the UI feels tactile and approachable rather than cold or technical. Interactive elements prioritize "smoothness" through eased transitions that mimic the flow of premium fabrics.

## Colors

The palette is derived from natural, earthy elements to maintain the "Nature Edit" philosophy. The background uses **Carbon**, a deep, warm near-black that provides a softer contrast than pure black. **Soft Sage** serves as the primary brand color, used for calls-to-action and active states to provide a botanical focal point.

**Suede** and **Flour** function as high-contrast accents for typography and secondary UI elements, ensuring legibility against the dark background. Tonal variations of Carbon are used for surface layering, creating a "container-on-container" depth that feels structural yet soft.

## Typography

The system employs a dual-font strategy to balance editorial elegance with functional clarity. **Libre Caslon Text** is used for headlines and display text, bringing a timeless, literary quality that aligns with the "Pearly" aesthetic.

**Hanken Grotesk** serves as the primary UI font. It is a modern, sharp sans-serif that remains highly legible in dark mode environments. Wide tracking (letter-spacing) is applied to labels and titles to mirror the spaced-out brand mark, reinforcing the airy, minimalist character of the shop.

## Layout & Spacing

The layout follows a **fluid grid** model with generous margins to create "breathable" space around product imagery. On desktop, a 12-column grid is used with significant external margins (64px) to center the content and maintain an upscale feel.

Spacing is aggressive between major sections (120px) to distinguish different collections and stories clearly. For product grids, a standard 4-column layout is used on desktop, reflowing to 2-columns on mobile to ensure imagery remains large and impactful. All internal element spacing follows an 8px base unit to maintain mathematical harmony.

## Elevation & Depth

Elevation in this dark-mode system is communicated through **tonal layers** and **glassmorphism** rather than traditional heavy shadows.

1.  **Surfaces:** The base layer is Carbon. Secondary surfaces (cards, sidebars) use a slightly lighter `carbon-muted` tint.
2.  **Glassmorphism:** Overlays such as the navigation bar, "quick add" modals, and filter menus use a background blur (12px to 20px) with a semi-transparent `carbon` fill (opacity 70-80%).
3.  **Soft Shadows:** Where depth is required (e.g., floating cart), use "Ambient Shadows"—diffused, large-radius shadows with a very low opacity (15%) tinted with the `carbon` color to avoid a "muddy" look.
4.  **Borders:** Use low-contrast 1px outlines in `suede` at 10% opacity to define boundaries without breaking the "smooth" visual flow.

## Shapes

The shape language is consistently **Rounded**, supporting the "comfy" and "smooth" theme. Product cards, buttons, and input fields all utilize a 0.5rem (8px) base radius. Larger containers, such as promotional banners or modals, should scale up to `rounded-xl` (24px) to create a soft, protective feel for the content.

## Components

### Buttons

- **Primary:** Solid `soft-sage` fill with `carbon` text. Rounded corners. High-ease transition on hover (scale 1.02).
- **Secondary:** Outlined `suede` (20% opacity) with `flour` text.
- **Tertiary/Ghost:** `flour` text with no background, underline on hover.

### Cards

- **Product Card:** No border. Soft-sage or Carbon-muted background on hover. Product info is left-aligned using `label-lg` for category and `body-md` for name.
- **Glass Card:** Background blur + 10% suede border for high-level UI elements like floating filters.

### Form Inputs

- **Fields:** Carbon-muted background, 1px suede border (15% opacity). Transitions to a Soft-Sage border on focus.
- **Checkboxes/Radios:** Circular (pill-shaped) for a softer look. Soft-sage fill for active states.

### Chips & Tags

- Used for "New In" or "Sale" badges. Small, uppercase `label-sm` text. Pill-shaped with low-opacity `soft-sage` background.

### Motion

- **Interactive Elements:** All hover and active states must use `ease-in-out` transitions (250ms - 350ms duration).
- **Page Transitions:** Staggered entry for product grid items to simulate a "gentle reveal."

## Stitch Screen Specification

- **Project Title:** Velvet Pearl Boutique
- **Project ID:** `17838115181029007322`
- **Screen Title:** Sharpened Professional Gallery (Portrait)
- **Screen ID:** `b06dc658002b4c0dbeedb5834f264914`
- **Aspect & Layout:** Portrait orientation, fluid 2 to 4-column product grid with mobile single-column toggle.
- **Implemented Workspace Files:**
  - `index.html` - Semantic HTML5 markup, accessible headers, modals, mobile drawer, and toolbar.
  - `styles.css` - Full implementation of design system variables (colors, typography, glassmorphism, cards, and modal elevations).
  - `script.js` - Dynamic product grid catalog, category filter pills, search overlay, quick-view lightbox, interactive cart drawer, and toast notifications.
