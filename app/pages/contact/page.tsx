import OrderForm from '@/components/sections/orderform';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="container mx-auto p-4 mt-20">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="mt-4 text-lg">We’d love to hear from you! Whether you have a question, feedback, or need assistance, please feel free to reach out.</p>

      {/* Contact Information */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Get in Touch</h2>
        <p className="mt-2">
          You can contact us through the following methods:
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li><strong>Email:</strong> <a href="mailto:meatdaraz@gmail.com" className="text-blue-600 hover:underline">support@packeeze.com</a></li>
          <li><strong>Phone:</strong> +1 (800) 223-0927</li>
          <li><strong>Address:</strong> Dallas, Texas</li>
        </ul>
      </section>

      {/* Order Form Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Place an Order</h2>
        <p className="mt-2">
          If you're interested in placing an order or have specific inquiries, please fill out the form below, and we'll get back to you as soon as possible.
        </p>
      <div className='mt-10'> 
        <form className="bg-grey-600 p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="border p-2 rounded" required />
            <input type="text" placeholder="Last Name" className="border p-2 rounded" required />
            <input type="email" placeholder="Email" className="border p-2 rounded" required />
            <input type="tel" placeholder="Phone" className="border p-2 rounded" />
            <select className="border p-2 rounded" required>
              <option>Quantity Range</option>
              <option>100-500</option>
              <option>500-1000</option>
              <option>1000+</option>
            </select>
            <input type="text" placeholder="Product Type" className="border p-2 rounded" required />
          </div>
          <textarea
            placeholder="Tell us about your project! Box dimensions, industry, design, etc. we can help."
            className="border p-2 rounded w-full mt-4"
            rows={4}
            required
          ></textarea>
          <button type="submit" className="bg-black text-white w-full py-2 rounded mt-4 hover:bg-blue-700">
            Get Free Quote
          </button>
          <p className="text-xs text-gray-500 mt-2">
            By submitting this form you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
          </p>
        </form></div>
      </section>
      <button className='mt-5'>   <Link href="/" className="mt-8 text-blue-600 hover:underline">Go back to Home</Link></button>
    </div>
  );
}
