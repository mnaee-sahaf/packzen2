import Link from 'next/link';

export default function Sustainability() {
  return (
    <div className="flex flex-col min-h-screen mt-20">
      <main className="container mx-auto p-4 flex-1">
        <h1 className="text-3xl font-bold">Sustainability</h1>
        <p className="mt-4 text-lg">
          At Packeeze, we are committed to promoting sustainability and reducing our environmental impact. We believe that every action counts in creating a greener future for all.
        </p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Our Sustainability Initiatives</h2>
          <p className="mt-2">
            We are actively working to reduce our carbon footprint and promote environmental responsibility through a variety of initiatives:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li><strong>Renewable Energy:</strong> We have committed to using 100% renewable energy across our offices and operations.</li>
            <li><strong>Reducing Waste:</strong> We are striving to minimize waste by implementing recycling programs and reducing packaging materials.</li>
            <li><strong>Sustainable Sourcing:</strong> We source materials and products that are environmentally friendly and ethically produced.</li>
            <li><strong>Carbon Offset Programs:</strong> We invest in programs that help offset the carbon emissions we cannot eliminate.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Sustainability Goals</h2>
          <p className="mt-2">
            Our sustainability goals are ambitious but essential for a better tomorrow. Here's what we aim to achieve:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li><strong>Net Zero Emissions:</strong> Achieve net zero emissions by 2030.</li>
            <li><strong>Waste Reduction:</strong> Reduce our waste output by 50% within the next 5 years.</li>
            <li><strong>Water Conservation:</strong> Cut down water usage in all of our operations by 30% by 2027.</li>
            <li><strong>Community Engagement:</strong> Support sustainability initiatives in the communities where we operate.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Get Involved</h2>
          <p className="mt-2">
            We invite everyone to participate in our sustainability efforts. Here are a few ways you can help:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>Recycle and reduce waste at home and work</li>
            <li>Support businesses that prioritize sustainability</li>
            <li>Minimize energy consumption by turning off lights and unplugging devices when not in use</li>
            <li>Join us in planting trees and supporting reforestation efforts</li>
          </ul>
        </section>

        <Link href="/" className="mt-8 text-blue-600 hover:underline">Go back to Home</Link>
      </main>
    </div>
  );
}
