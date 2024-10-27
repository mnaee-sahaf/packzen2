import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Input Component Architecture
 * 
 * Key Concepts:
 * 
 * 1. Component Composition:
 *    - Extends native HTML input attributes
 *    - Uses React.forwardRef for ref handling
 *    - Maintains accessibility features
 * 
 * 2. Styling Strategy:
 *    - Base styles applied consistently
 *    - Supports custom className overrides
 *    - Uses CSS variables for theming
 * 
 * 3. Type Safety:
 *    - Props interface extends HTMLInputElement
 *    - Preserves all native input attributes
 *    - TypeScript ensures proper usage
 * 
 * 4. Accessibility:
 *    - Preserves native input behaviors
 *    - Supports ARIA attributes
 *    - Maintains keyboard navigation
 */
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          // Base styles that create consistent look
          "flex h-9 w-full rounded-md border border-input",
          // Interactive states
          "bg-transparent px-3 py-1 text-sm shadow-sm transition-colors",
          // File input specific styles
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          // Focus and disabled states
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          "disabled:cursor-not-allowed disabled:opacity-50",
          // Custom className override
          className || ''
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
