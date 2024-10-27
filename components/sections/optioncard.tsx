// components/OptionCard.tsx
'use client';

interface OptionCardProps {
    title: string;
    description: string;
    selected: boolean;
    onSelect: () => void;
  }
  
  export function OptionCard({ title, description, selected, onSelect }: OptionCardProps) {
    return (
      <button
        className={`border p-4 rounded-lg ${selected ? 'border-green-500' : 'border-gray-300'} hover:border-green-400`}
        onClick={onSelect}
      >
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </button>
    );
  }
  