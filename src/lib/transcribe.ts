export async function transcribe(file: File, key: string): Promise<string> {
  const form = new FormData();
  form.append('file', file);
  const res = await fetch('https://api.example.com/transcribe', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
    },
    body: form,
  });
  const data = await res.json();
  return data.text ?? '';
}
