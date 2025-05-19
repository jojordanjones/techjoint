export async function transcribe(file: File): Promise<string> {
  const apiKey = import.meta.env.VITE_TRANSCRIBE_KEY;
  if (!apiKey) throw new Error('Missing API key');
  // TODO: implement transcription API call
  return Promise.resolve('');
}
