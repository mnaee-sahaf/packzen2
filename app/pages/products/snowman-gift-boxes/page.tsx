'use client';

import OrderForm from '@/components/sections/orderform';
import ProductSpecification from '@/components/sections/productSpecification';


export default function CustomPaperBag() {

  return (
    <div className="flex flex-col min-h-screen bg-white mt-20">
      <main className="flex-1">
      <OrderForm/>
      <ProductSpecification/>
      </main>
    </div>
  );
}
