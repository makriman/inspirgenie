/** Absolute URL for `path` when Astro `site` is set. `JSON.stringify` drops undefined. */
export function siteUrl(site: URL | undefined, path = '/'): string | undefined {
  if (!site) return undefined;
  return new URL(path, site).href;
}
