export function setMeta(title: string, description: string) {
  document.title = title;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) {
    desc.setAttribute('content', description);
  } else {
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = description;
    document.head.appendChild(meta);
  }
}
