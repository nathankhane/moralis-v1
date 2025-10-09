# Bridge Branding Guide

*Last Updated: September 24, 2025*

## 🌉 **Bridge Brand Identity**

### **Logo Assets & Usage**

#### **Primary Logo Files** (Original SVGs)
```
public/logos/Bridge/
├── Black Logo.svg          # Horizontal logo for light backgrounds
├── White Logo.svg          # Horizontal logo for dark backgrounds  
├── Black Logo Vertical 2.svg   # Vertical logo for light backgrounds
├── White Logo Vertical 2.svg   # Vertical logo for dark backgrounds
├── Black Icon.svg          # Square icon for light backgrounds
└── White Icon.svg          # Square icon for dark backgrounds
```

#### **Logo Implementation Components**

**Header Logo (Navigation)**
```tsx
import { Logo } from "@/components/logo";

// Usage in header
<Logo /> // Automatically handles theme switching
```
- **Files Used**: `Black Logo.svg` (light) / `White Logo.svg` (dark)
- **Dimensions**: 768×240px (3.2:1 aspect ratio)
- **Sizing**: `h-8 w-auto` (32px height, ~120px width)
- **Perfect For**: Navigation bars, horizontal layouts

**Footer Logo (Vertical)**
```tsx
import { LogoVertical } from "@/components/logo";

// Usage in footer
<LogoVertical /> // Automatically handles theme switching
```
- **Files Used**: `Black Logo Vertical 2.svg` (light) / `White Logo Vertical 2.svg` (dark)
- **Dimensions**: 535×435px (1.23:1 aspect ratio)
- **Sizing**: `h-16 w-auto` (64px height, ~80px width)
- **Perfect For**: Footer branding, vertical layouts

**Icon Logo (Compact Spaces)**
```tsx
import { LogoIcon } from "@/components/logo";

// Usage for compact areas
<LogoIcon /> // Automatically handles theme switching
```
- **Files Used**: `Black Icon.svg` (light) / `White Icon.svg` (dark)
- **Dimensions**: 183×184px (1:1 aspect ratio)
- **Sizing**: `h-6 w-6` (24px square)
- **Perfect For**: Mobile menus, compact spaces, secondary branding

---

## 🎯 **Logo Usage Rules**

### **✅ DO**
- Use original Bridge SVG files exactly as provided
- Maintain aspect ratios with `w-auto` sizing
- Implement theme-responsive switching (black for light, white for dark)
- Use `Logo` for header, `LogoVertical` for footer, `LogoIcon` for compact spaces
- Apply proper `priority` loading for above-the-fold logos

### **❌ DON'T**
- Modify or recreate the original Bridge logo SVG files
- Force specific width/height that distorts aspect ratio
- Use horizontal logos in vertical spaces (and vice versa)
- Mix logo types within the same component without theme switching

---

## 🎨 **Brand Color Palette**

### **Primary Colors**
- **Background**: `#0F0F0F` (Dark theme primary)
- **Text**: `#FAFAFA` (Light text)
- **Primary Accent**: `#7F5BFF` (Bridge Purple)
- **Success Accent**: `#14E956` (Bridge Green)

### **Logo Theme Mapping**
- **Light Backgrounds**: Use Black logo variants
- **Dark Backgrounds**: Use White logo variants
- **Automatic Switching**: Handled by Tailwind `dark:` classes

---

## 📱 **Responsive Logo Guidelines**

### **Desktop (≥1024px)**
- **Header**: Full horizontal logo (`h-8`)
- **Footer**: Vertical logo (`h-16`)
- **Ample Space**: Use full Bridge text for maximum brand impact

### **Tablet (768px - 1023px)**
- **Header**: Horizontal logo (`h-8`)
- **Footer**: Vertical logo (`h-14`)
- **Balanced**: Good brand presence without overwhelming content

### **Mobile (<768px)**
- **Header**: Consider using LogoIcon for very small screens if needed
- **Footer**: Smaller vertical logo (`h-12`)
- **Compact**: Prioritize usability while maintaining brand recognition

---

## 🔧 **Technical Implementation**

### **Next.js Image Optimization**
```tsx
<Image
  src="/logos/Bridge/Black Logo.svg"
  alt="Bridge Logo"
  width={120}
  height={38}
  priority
  className="h-8 w-auto dark:hidden"
/>
```

### **SVG Benefits**
- **Scalable**: Crisp at all resolutions and zoom levels
- **Lightweight**: Smaller file sizes than PNG equivalents
- **Flexible**: Easy CSS styling and theming
- **Performance**: Fast loading with Next.js optimization

### **Theme Switching Pattern**
```tsx
{/* Light theme - Black logo */}
<Image className="h-8 w-auto dark:hidden" src="/logos/Bridge/Black Logo.svg" />

{/* Dark theme - White logo */}  
<Image className="h-8 w-auto hidden dark:block" src="/logos/Bridge/White Logo.svg" />
```

---

## 📋 **Logo Component Reference**

### **Available Components**
1. **`<Logo />`** - Primary horizontal logo (header)
2. **`<LogoVertical />`** - Vertical logo (footer)
3. **`<LogoIcon />`** - Square icon (compact spaces)
4. **`<LogoStroke />`** - Custom stroke logo (legacy, consider deprecating)

### **Import Paths**
```tsx
import { Logo, LogoVertical, LogoIcon } from "@/components/logo";
```

---

## 🚀 **Deployment Notes**

- All logo assets are SVG format for optimal web performance
- Theme switching is automatic based on user's dark/light preference
- Logos are priority-loaded for above-the-fold placement
- Responsive sizing ensures proper display across all devices
- Original Bridge brand files preserved exactly as provided

---

**For questions about Bridge branding implementation, refer to this guide or the main project README.md**
