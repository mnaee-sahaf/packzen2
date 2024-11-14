import { Star } from 'lucide-react'
import Image from 'next/image'

// Testimonials section component
// Displays customer reviews in a grid layout
// Used on homepage to build trust with potential customers
export function Testimonials() {
  // Log component mount for debugging
  console.log('[Testimonials] Component mounted')

  // Mock testimonial data - in production, this would come from an API
  const testimonials = [
    {
      text: "packeeze has revolutionized our packaging process. Their custom solutions perfectly align with our brand identity, and the quality is outstanding.",
      author: "Jane Doe",
      role: "CEO, Brand Inc."
    },
    {
      text: "packeeze has revolutionized our packaging process. Their custom solutions perfectly align with our brand identity, and the quality is outstanding.",
      author: "Jane Doe",
      role: "CEO, Brand Inc."
    },
    {
      text: "packeeze has revolutionized our packaging process. Their custom solutions perfectly align with our brand identity, and the quality is outstanding.",
      author: "Jane Doe",
      role: "CEO, Brand Inc."
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-600">What Our Clients Say</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-lg shadow-lg">
              <Image 
                src="/path/to/default/image.png" // Assuming a default image path for demonstration
                alt={testimonial.author}
                width={100}
                height={100}
                className="rounded-full"
                loading="lazy"
              />
              <p className="text-[#64748B]">{testimonial.text}</p>
              <div>
                <h4 className="font-semibold text-blue-600">{testimonial.author}</h4>
                <p className="text-sm text-[#64748B]">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
