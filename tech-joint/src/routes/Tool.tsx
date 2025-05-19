import { useParams } from 'react-router-dom';

export default function Tool() {
  const { id } = useParams<{ id: string }>();
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Tool: {id}</h1>
    </main>
  );
}
