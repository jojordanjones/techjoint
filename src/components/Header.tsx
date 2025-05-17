import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-blue-500 text-white px-4 py-2 flex justify-between">
      <Link to="/" className="font-bold">
        TechJoint
      </Link>
    </header>
  );
}
