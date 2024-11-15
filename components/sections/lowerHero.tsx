import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function LowerHero() {
  return (
    <section className="w-full py-16 md:py-28 bg-[#F9FAFB] text-gray-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Ready to get <span className="text-blue-600">unmatched </span> packaging? 
            </h2>
            <p className="max-w-md mx-auto text-gray-600 text-lg md:text-xl lg:text-lg">
            Share your packaging requirements and get a quote to order packaging your customers will love!
            </p>
          </div>
          <div className="w-full max-w-md">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScZssQngbYTcIozlKWjiys3LymnlYKwMc_Mmcc_ANpr5A9gjA/viewform?usp=pp_url">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center w-full space-x-2 py-3 text-lg font-semibold transition">
                <span>Get A Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
