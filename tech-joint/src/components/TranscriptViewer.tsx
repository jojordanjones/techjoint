interface Props {
  content: string;
  onDownload: () => void;
}

export default function TranscriptViewer({ content, onDownload }: Props) {
  return (
    <div>
      <pre className="whitespace-pre-wrap border p-2 mb-2">{content}</pre>
      <button onClick={onDownload} className="px-2 py-1 border">Download</button>
    </div>
  );
}
