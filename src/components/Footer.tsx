import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center text-sm p-4 border-t mt-8">
      <p>&copy; {new Date().getFullYear()} TechJoint</p>
    </footer>
  );
}
