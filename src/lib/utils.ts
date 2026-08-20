export function getAssetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (path.startsWith('/') && basePath) {
    return `${basePath}${path}`;
  }
  return path;
}
