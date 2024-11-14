# packeeze Landing Page Structure

## Component Organization
- `app/page.tsx`: Main landing page component
- `app/layout.tsx`: Root layout with font configuration and metadata
- All route pages must be named `page.tsx` and placed in their corresponding directories:
  - `app/products/page.tsx` for /products
  - `app/about/page.tsx` for /about
  - `app/sustainability/page.tsx` for /sustainability
  - `app/contact/page.tsx` for /contact
  - `app/legal/[section]/page.tsx` for legal pages
- Existing component files without 'page.tsx' naming will not be routable

## Navigation Structure
- Main navigation in header
- Product categories link to specific sections using hash routes
- Legal pages under `/legal/*` route pattern
- All internal links must use Next.js Link component for client-side navigation
- File-based routing follows Next.js App Router conventions:
  - Pages must be named `page.tsx` to be routable
  - Directory name becomes the route (e.g., `app/about/page.tsx` → `/about`)
  - Components that aren't pages should not use `page.tsx` naming

## Import Requirements
- Swiper CSS must be imported in layout.tsx for carousel functionality
- shadcn/ui components require specific import pattern: `@/components/ui/[component]`
- Keep imports organized by:
  1. React/Next.js imports
  2. Third-party libraries
  3. Local components
  4. Types/utilities
- Remove unused imports to prevent bundle bloat

## Performance Optimizations
- Use React.useMemo for expensive computations or frequently re-rendered components
- Optimize session handling with proper configuration
- Prevent unnecessary revalidation and refetching
- Minimize component re-renders

## Key Features
- Responsive design with Tailwind CSS
- Custom font configuration using local Geist fonts
- Component-based architecture using shadcn/ui components
- Image optimization using Next.js Image component

## Style Guidelines
- Color scheme: 
  - Primary: Blue (#2563EB)
  - Text: Slate (#64748B)
  - Background variations: (#F9FAFB, #F8FAFC)
- Typography: Geist font family for both sans and mono
- Consistent spacing using Tailwind's spacing scale

## Component Dependencies
- UI components from shadcn/ui (Button, Input)
- Icons from lucide-react
- Layout components from Next.js (Link, Image)

## Important Notes
- All images should use Next.js Image component for optimization
- Use semantic HTML elements for better accessibility
- Maintain consistent spacing and color schemes
- Keep responsive design in mind for all components
