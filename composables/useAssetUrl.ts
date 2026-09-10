/**
 * Prefixes a /public asset path with the deployed base URL.
 *
 * Bundled assets and <NuxtLink> targets get this prefix automatically, but
 * plain strings like "/images/foo.jpg" do not — so on a GitHub Pages project
 * site (served from /<repo>/) they would resolve to the domain root and 404.
 */
export function useAssetUrl() {
  const base = useRuntimeConfig().app.baseURL || '/'
  return (path: string) => `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`
}
