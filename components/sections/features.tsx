import { Truck, RefreshCcw, DollarSign, Cpu } from 'lucide-react';

export function Features() {
  return (
    <section className="w-full bg-gray-50 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8 justify-center text-gray-700">
          
          {/* Feature item */}
          <div className="flex flex-col items-center w-48 text-center space-y-2">
            <Truck className="w-8 h-8 text-blue-600" />
            <span className="font-medium text-base sm:text-lg">Free Shipping</span>
          </div>

          {/* Feature item */}
          <div className="flex flex-col items-center w-48 text-center space-y-2">
            <RefreshCcw className="w-8 h-8 text-blue-600" />
            <span className="font-medium text-base sm:text-lg">Quick Turn Around</span>
          </div>

          {/* Feature item */}
          <div className="flex flex-col items-center w-48 text-center space-y-2">
            <DollarSign className="w-8 h-8 text-blue-600" />
            <span className="font-medium text-base sm:text-lg">No Die/Plate Charges</span>
          </div>

          {/* Feature item */}
          <div className="flex flex-col items-center w-48 text-center space-y-2">
            <Cpu className="w-8 h-8 text-blue-600" />
            <span className="font-medium text-base sm:text-lg">Competitive Price</span>
          </div>

        </div>
      </div>
    </section>
  );
}
