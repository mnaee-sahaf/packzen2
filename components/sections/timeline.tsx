// components/Timeline.tsx
'use client';

export function Timeline({ startDate }: { startDate: Date }) {
    // Calculate milestone dates based on the start date
    const milestones = [
      { label: 'Order Placed', date: startDate },
      { label: 'Dieline Ready', date: new Date(startDate.getTime() + 2 * 24 * 60 * 60 * 1000) },
      { label: 'Artwork Ready', date: new Date(startDate.getTime() + 6 * 24 * 60 * 60 * 1000) },
      { label: 'Production Completed', date: new Date(startDate.getTime() + 20 * 24 * 60 * 60 * 1000) },
    ];
  
    return (
      <section className="space-y-4">
        <h2 className="font-bold text-lg">Timeline</h2>
        <div className="space-y-2">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-center">
              <span className="font-semibold">{milestone.label}</span>
              <span className="ml-4 text-gray-500">{milestone.date.toDateString()}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }
  