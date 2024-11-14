
export default function About() {
  return (
    <div className="container mx-auto p-6 rounded-lg shadow-md mt-16"> {/* Added margin-top to prevent being cut by the header */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">About Us</h1>
      <div className="space-y-4 mb-6"> {/* Added margin-bottom for spacing between this section and the video section */}
        <p className="text-lg">
        Packeeze is a customer-first packaging company. Turning your ideas into quality packaging is our mission. Choose us to fulfill all your packaging needs! We are a team of packaging, design, and marketing experts who love to bring clients’ packaging ideas into life.
       </p>
        <p className="text-lg">
        Drop a line by shooting us a mail or book a meeting with our packaging specialists to get packaging your customers will love!
        </p>
      </div>
    </div>
  );
}
