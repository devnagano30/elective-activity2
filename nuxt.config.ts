// BASE_URL is supplied by the GitHub Pages workflow as "/<repo-name>/".
// It has to be applied here, at build time, rather than through the
// NUXT_APP_BASE_URL runtime override: that override lands after the
// prerenderer has already mounted its routes, so every page 404s and gets
// written out as a 16-byte "Redirecting..." stub instead of real HTML.
const baseURL = process.env.BASE_URL || '/'

export default defineNuxtConfig({
  compatibilityDate: '2026-09-04',
  devtools: { enabled: true },
  components: [{ path: '~/components', pathPrefix: false }],
  css: ['~/assets/css/main.css'],

  nitro: {
    preset: 'github-pages',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/about', '/destinations', '/destinations/1', '/destinations/2', '/destinations/3'],
      // Emit "destinations.html" rather than "destinations/index.html" so
      // GitHub Pages serves /destinations directly instead of 301-ing to
      // /destinations/ first.
      autoSubfolderIndex: false
    }
  },

  experimental: {
    // All page data is imported statically, so the extra _payload.json
    // round-trip per navigation buys nothing.
    payloadExtraction: false
  },

  app: {
    baseURL,
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Pangasinan Heritage Digital Showcase',
      meta: [
        {
          name: 'description',
          content: 'A mobile-first digital tourism showcase for Pangasinan heritage and destinations.'
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0f766e' }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: `${baseURL}favicon.svg`
        }
      ]
    }
  }
})
