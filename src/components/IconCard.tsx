import React from 'react';
import { Link } from 'react-router-dom';
import type { Tool } from '../data/tools';

export default function IconCard({ tool }: { tool: Tool }) {
  const { href, title, icon: Icon, comingSoon } = tool;
  return (
    <Link
      to={href}
      className={`flex flex-col items-center p-4 border rounded-lg shadow-sm hover:bg-gray-50 ${
        comingSoon ? 'pointer-events-none opacity-50' : ''
      }`}
    >
      <Icon className="w-8 h-8" aria-hidden="true" />
      <span className="mt-2 text-sm font-medium text-center">{title}</span>
    </Link>
  );
}
