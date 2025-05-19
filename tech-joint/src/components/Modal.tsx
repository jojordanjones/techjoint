import { ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
  onClose: () => void;
}

export default function Modal({ title, children, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow max-w-md w-full">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold">{title}</h2>
          <button onClick={onClose}>X</button>
        </div>
        {children}
      </div>
    </div>
  );
}
