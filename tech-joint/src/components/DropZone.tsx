import { useCallback } from 'react';

interface Props {
  onUpload: (file: File) => void;
  maxSizeMB?: number;
  accept?: string;
}

export default function DropZone({ onUpload, maxSizeMB = 50, accept = 'audio/*' }: Props) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      if (file.size > maxSizeMB * 1024 * 1024) {
        alert('File too large');
        return;
      }
      onUpload(file);
    },
    [onUpload, maxSizeMB]
  );

  return <input type="file" accept={accept} onChange={handleChange} />;
}
