import React from 'react';
import { useParams } from 'react-router-dom';

export default function Tool() {
  const { id } = useParams();
  return (
    <main className="p-4">
      <h2>Tool: {id}</h2>
      <p>Coming soon...</p>
    </main>
  );
}
