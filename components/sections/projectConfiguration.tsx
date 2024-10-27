// components/ProjectConfiguration.tsx
'use client';

import { useState } from 'react';
import { OptionCard } from './optioncard';

export function ProjectConfiguration() {
  const [selectedPackaging, setSelectedPackaging] = useState<string | null>(null);

  const packagingOptions = [
    { title: 'Packaging', description: 'Just the box, without an insert to hold the products in place.' },
    { title: 'Packaging with matching insert', description: 'A box with a custom insert that fits perfectly inside.' },
    // Add other options...
  ];

  return (
    <section className="space-y-4">
      <h2 className="font-bold text-lg">Which type of packaging are you interested in?</h2>
      <div className="grid grid-cols-2 gap-4">
        {packagingOptions.map((option) => (
          <OptionCard
            key={option.title}
            title={option.title}
            description={option.description}
            selected={selectedPackaging === option.title}
            onSelect={() => setSelectedPackaging(option.title)}
          />
        ))}
      </div>
    </section>
  );
}
