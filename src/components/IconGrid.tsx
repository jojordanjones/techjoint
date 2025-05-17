import React from 'react';
import IconCard from './IconCard';
import type { Tool } from '../data/tools';

export default function IconGrid({ tools }: { tools: Tool[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {tools.map((tool) => (
        <IconCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
}
