import { ProductSize, QuantityOption } from './types';

export const productSizes: ProductSize[] = [
  { name: 'Extra Small', dimensions: '150x100x50mm', basePrice: 3.00 },
  { name: 'Small', dimensions: '200x150x75mm', basePrice: 4.00 },
  { name: 'Medium', dimensions: '250x200x100mm', basePrice: 5.00 },
  { name: 'Large', dimensions: '300x250x150mm', basePrice: 6.00 },
];

export const quantityOptions: QuantityOption[] = [
  { value: '100', label: '100 boxes', multiplier: 1 },
  { value: '150', label: '150 boxes', multiplier: 0.95 },
  { value: '200', label: '200 boxes', multiplier: 0.80 },
  { value: '250+', label: '250+ boxes', multiplier: 0.70 },
];

export const calculatePrice = (size: ProductSize, quantity: QuantityOption) => {
  const baseTotal = size.basePrice * parseInt(quantity.value);
  const discountedTotal = baseTotal * quantity.multiplier;
  return {
    total: discountedTotal.toFixed(2),
    perBox: (discountedTotal / parseInt(quantity.value)).toFixed(2),
  };
};