import { Factory, Truck, BadgeCheck, Building } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Building className="w-12 h-12 text-green-600" />,
      title: "Strategic Packaging Design",
      description: "Industry tailored designs to outshine competitors.",
    },
    {
      icon: <Factory className="w-12 h-12 text-green-600" />,
      title: "Managed Manufacturing",
      description:
        "Sourced only from certified facilities to deliver multi packaging capabilities.",
    },
    {
      icon: <Truck className="w-12 h-12 text-green-600" />,
      title: "Hassle Free Logistics",
      description:
        "Optimized shipping routes for on-time deliveries and reduced carbon emissions.",
    },
    {
      icon: <BadgeCheck className="w-12 h-12 text-green-600" />,
      title: "The PakFactory Promise",
      description:
        "We guarantee the highest quality experience for every packaging order.",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {features.map((feature, index) => (
          <div key={index} className="space-y-4">
            <div className="flex justify-center">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
