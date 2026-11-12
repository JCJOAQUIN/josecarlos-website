# NOVA – Visual Identity

## 1. Document Information

| Field | Description |
|---|---|
| **Document ID** | BRAND-001 |
| **Document Name** | NOVA Visual Identity |
| **Project** | Project NOVA |
| **Version** | 1.0 |
| **Status** | In Progress |
| **Created Date** | November 7, 2026 |
| **Last Updated** | November 7, 2026 |
| **Owner** | José Carlos Joaquín Vázquez |

---

## 2. Purpose

This document defines the visual identity foundations of Project NOVA.

It establishes the initial brand color palette, visual roles, and design principles that will guide the development of the website and its user interface.

The visual identity will evolve incrementally as typography, spacing, component styles, and other design decisions are defined.

The objective is to maintain a consistent, recognizable, accessible, and professional visual language throughout the product.

---

## 3. Brand Direction

Project NOVA aims to communicate a professional identity associated with:

- Technology and innovation.
- Professionalism and reliability.
- Clarity and simplicity.
- Modern software development.
- Creativity and problem-solving.
- Trust and approachability.

The visual language should be modern, clean, and functional, prioritizing content readability and a consistent user experience.

### 3.1 Visual Principles

The following principles guide the visual identity:

**Professionalism**

Use a balanced visual language that communicates technical expertise and reliability.

**Clarity**

Prioritize readable typography, clear information hierarchy, and intuitive navigation.

**Consistency**

Apply the same visual rules across pages, sections, and reusable components.

**Simplicity**

Avoid unnecessary decoration and excessive visual complexity.

**Accessibility**

Maintain sufficient contrast, visible interaction states, and accessible component behavior.

**Adaptability**

Ensure that the visual identity works across desktop, tablet, and mobile screen sizes.

---

## 4. Color Palette

The initial NOVA color palette is based on deep blue, vibrant blue, and neutral tones.

The colors are organized according to their intended visual responsibilities.

### 4.1 Primary Colors

| Token | HEX | Intended Use |
|---|---|---|
| `nova-primary` | `#004080` | Main brand color, primary buttons, navigation, and important visual elements. |
| `nova-secondary` | `#007BFF` | Links, secondary actions, interactive elements, and visual accents. |

### 4.2 Typography Colors

| Token | HEX | Intended Use |
|---|---|---|
| `nova-title` | `#343A40` | Headings, titles, and important textual elements. |
| `nova-text` | `#6C757D` | Paragraphs, descriptions, secondary text, and supporting information. |

### 4.3 Surface Colors

| Token | HEX | Intended Use |
|---|---|---|
| `nova-background` | `#F8F9FA` | Main application background and page surfaces. |
| `nova-card` | `#EBF2FA` | Cards, secondary panels, and highlighted content surfaces. |

### 4.4 Color Palette Reference

| Color | Preview | HEX |
|---|---|---|
| Primary | ![#004080](https://placehold.co/100x28/004080/004080.png) | `#004080` |
| Secondary | ![#007BFF](https://placehold.co/100x28/007BFF/007BFF.png) | `#007BFF` |
| Title | ![#343A40](https://placehold.co/100x28/343A40/343A40.png) | `#343A40` |
| Text | ![#6C757D](https://placehold.co/100x28/6C757D/6C757D.png) | `#6C757D` |
| Background | ![#F8F9FA](https://placehold.co/100x28/F8F9FA/F8F9FA.png) | `#F8F9FA` |
| Card | ![#EBF2FA](https://placehold.co/100x28/EBF2FA/EBF2FA.png) | `#EBF2FA` |

---

## 5. Color Usage Guidelines

### 5.1 Primary Color

The primary color represents the main visual identity of NOVA.

Use it for:

- Primary navigation elements.
- Main call-to-action buttons.
- Important interface controls.
- Selected navigation states.
- Brand-related visual elements.

Avoid using it excessively in large areas when doing so reduces visual hierarchy.

### 5.2 Secondary Color

The secondary color complements the primary color and provides visual emphasis.

Use it for:

- Links.
- Secondary actions.
- Interactive elements.
- Hover states, when appropriate.
- Small visual accents.

### 5.3 Typography Colors

The title color should establish a clear hierarchy and distinguish headings from body content.

The text color should be used for paragraphs and supporting information.

Text contrast must be validated against the actual background before being used in small or essential text.

### 5.4 Surface Colors

The background color provides the main visual canvas for the application.

The card color distinguishes content areas and helps organize information without introducing excessive visual contrast.

Cards may also use borders or subtle shadows when necessary to improve visual separation.

---

## 6. Initial Design Token Implementation

The initial color tokens are implemented using Tailwind CSS 4 theme variables.

**Implementation file:** `src/styles.css`

```css
@import "tailwindcss";
@plugin "flowbite/plugin";
@source "../node_modules/flowbite";

@theme {
  /* NOVA Brand Colors */
  --color-nova-primary: #004080;
  --color-nova-secondary: #007bff;

  /* NOVA Typography Colors */
  --color-nova-title: #343a40;
  --color-nova-text: #6c757d;

  /* NOVA Surface Colors */
  --color-nova-background: #f8f9fa;
  --color-nova-card: #ebf2fa;
}
```

These variables generate the corresponding Tailwind CSS utility classes.

Examples:

```html
<div class="bg-nova-background">
  <h1 class="text-nova-title">
    Project NOVA
  </h1>

  <p class="text-nova-text">
    Professional introduction.
  </p>

  <button class="bg-nova-primary text-white">
    Explore projects
  </button>
</div>
```

The theme variables will serve as the foundation for future component styling and design tokens.

---

## 7. Accessibility Considerations

Color must not be the only method used to communicate information or interface states.

The following requirements apply:

- Maintain sufficient contrast between text and background colors.
- Use visible focus indicators for keyboard navigation.
- Provide distinguishable hover, focus, active, and disabled states.
- Use semantic HTML and accessible labels.
- Avoid relying exclusively on color to communicate errors or success.
- Validate text and interface contrast against WCAG 2.2 guidelines.

Contrast validation is pending and must be completed before the visual system is considered finalized.

---

## 8. Pending Visual Identity Decisions

The following elements will be defined in subsequent iterations.

| Element | Description | Status |
|---|---|---|
| Color Palette | Initial brand colors and semantic roles. | Defined |
| Typography | Font families, weights, sizes, and hierarchy. | Pending |
| Spacing Scale | Standard spacing values for layout and components. | Pending |
| Border Radius | Corner radius standards for cards, buttons, and inputs. | Pending |
| Shadows | Elevation and depth system. | Pending |
| Iconography | Icon library and usage conventions. | Pending |
| Interaction States | Hover, focus, active, disabled, and validation states. | Pending |
| Component Guidelines | Standard styles for buttons, cards, forms, and navigation. | Pending |
| Contrast Validation | Accessibility review of the approved color combinations. | Pending |

---

## 9. Future Development

The visual identity will be expanded through the following stages:

1. Define typography and text hierarchy.
2. Establish the spacing scale.
3. Define border radius and shadow tokens.
4. Establish interaction and accessibility states.
5. Define reusable component styling guidelines.
6. Validate the visual system across responsive layouts.

Each new decision must preserve consistency with the existing color palette and visual principles.

---

## 10. Revision History

| Version | Date | Author | Description |
|---|---|---|---|
| 1.0 | November 7, 2026 | José Carlos Joaquín Vázquez | Initial visual identity document and NOVA color palette definition. |

---

**End of Document**
