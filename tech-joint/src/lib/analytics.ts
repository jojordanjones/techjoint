export function track(event: string, data?: Record<string, unknown>) {
  console.log('Tracking event', event, data);
}
