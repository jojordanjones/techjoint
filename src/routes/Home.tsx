import React from 'react';
import IconGrid from '../components/IconGrid';
import tools from '../data/tools';

export default function Home() {
  return (
    <main className="p-4">
      <IconGrid tools={tools} />
    </main>
  );
}
