export function track(event: string) {
  if (import.meta.env.MODE === 'development') {
    console.info(`Analytics event: ${event}`);
  }
}
