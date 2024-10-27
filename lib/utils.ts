/**
 * Utility Functions
 * 
 * Performance Optimizations:
 * 1. Function Efficiency:
 *    - Single responsibility functions
 *    - Minimal array operations
 *    - Optimized string concatenation
 * 
 * 2. Bundle Size:
 *    - Tree-shakeable exports
 *    - No external dependencies
 *    - Small function footprint
 * 
 * Best Practices:
 * 1. Code Organization:
 *    - Pure functions
 *    - Predictable returns
 *    - Clear type definitions
 * 
 * 2. Error Handling:
 *    - Graceful falsy handling
 *    - Type checking
 *    - Consistent returns
 */

// Debounce function to limit the rate of function execution
export function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: Parameters<T>) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function to limit the number of times a function can be called
export function throttle<T extends (...args: any[]) => void>(func: T, limit: number) {
    let lastFunc: NodeJS.Timeout;
    let lastRan: number;
    return function executedFunction(...args: Parameters<T>) {
        if (!lastRan) {
            func(...args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if (Date.now() - lastRan >= limit) {
                    func(...args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// Deep clone function to create a deep copy of an object
export function deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

// Type guard function to check if a value is a string
export function isString(value: any): value is string {
    return typeof value === 'string';
}

// Type guard function to check if a value is an array
export function isArray(value: any): value is any[] {
    return Array.isArray(value);
}

// [Rest of the existing code and comments remain unchanged...]
export function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }