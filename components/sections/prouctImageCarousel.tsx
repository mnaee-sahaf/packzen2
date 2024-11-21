import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const productImages = [
  "https://images.unsplash.com/photo-1607547023947-45fe6c0738c4?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1607547023957-49d79c2c2e20?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1607547023958-42c46f0c4e8a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1607547023959-42c46f0c4e8b?q=80&w=800&auto=format&fit=crop",
];

export function ProductImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % productImages.length);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      (prevIndex - 1 + productImages.length) % productImages.length
    );
  };

  return (
    <div className="w-full space-y-4">
      <div className="relative aspect-square bg-white rounded-lg overflow-hidden">
        <Carousel className="w-full h-full">
          <CarouselContent>
            {productImages.map((image, index) => (
              <CarouselItem key={index}>
                <div
                  className={`h-full ${
                    activeIndex === index ? "block" : "hidden"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Product image ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none px-4">
            <div className="pointer-events-auto">
              <CarouselPrevious
                className="bg-white/90 hover:bg-white"
                onClick={handlePrevious}
              />
            </div>
            <div className="pointer-events-auto">
              <CarouselNext
                className="bg-white/90 hover:bg-white"
                onClick={handleNext}
              />
            </div>
          </div>
        </Carousel>
      </div>

      <div className="grid grid-cols-4 xs:grid-cols-2 sm:grid-cols-4 gap-2">
        {productImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`aspect-square rounded-md overflow-hidden border-2 transition-colors bg-white
              ${
                activeIndex === index
                  ? "border-black"
                  : "border-gray-200 hover:border-gray-400"
              }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
