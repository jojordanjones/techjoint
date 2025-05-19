interface Props {
  message: string;
}

export default function Toast({ message }: Props) {
  return <div className="fixed bottom-4 right-4 bg-black text-white p-2">{message}</div>;
}
