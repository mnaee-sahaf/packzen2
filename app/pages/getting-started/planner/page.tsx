// pages/index.tsx
"use client"; // Marking this file as a client component

import { useState } from 'react';
import { ProjectConfiguration } from '@/components/sections/projectConfiguration';
import { Timeline } from '@/components/sections/timeline';
import IndustryBrowser from '@/components/sections/industryBrowser';
import FAQ from '@/components/sections/faq';

export default function Home() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold">Packaging Project Planner</h1>
        <p className="text-gray-600">Get a rough estimate of how long your custom packaging project might take.</p>
      </div>
      <ProjectConfiguration />
      <div className="mt-8">
        <label className="block font-medium mb-2">Choose start date</label>
        <input
          type="date"
          value={startDate.toISOString().split('T')[0]}
          onChange={(e) => setStartDate(new Date(e.target.value))}
          className="border rounded-lg p-2"
        />
      </div>
      <Timeline startDate={startDate} />
      <div>
        <IndustryBrowser />
      </div>
      <div>
        <FAQ/>
      </div>
    </main>
  );
}
