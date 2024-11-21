import { ProductSize, QuantityOption } from './types';

export const productSizes: ProductSize[] = [
  { name: 'Extra Small', dimensions: '150x100x50mm', basePrice: 34.00 },
  { name: 'Small', dimensions: '200x150x75mm', basePrice: 42.00 },
  { name: 'Medium', dimensions: '250x200x100mm', basePrice: 56.00 },
];

export const quantityOptions: QuantityOption[] = [
  { value: '25', label: '25 boxes', multiplier: 1 },
  { value: '50', label: '50 boxes', multiplier: 0.95 },
  { value: '100', label: '100 boxes', multiplier: 0.90 },
  { value: '200', label: '200 boxes', multiplier: 0.85 },
];

export const calculatePrice = (size: ProductSize, quantity: QuantityOption) => {
  const baseTotal = size.basePrice * parseInt(quantity.value);
  const discountedTotal = baseTotal * quantity.multiplier;
  return {
    total: discountedTotal.toFixed(2),
    perBox: (discountedTotal / parseInt(quantity.value)).toFixed(2),
  };
};