const getCache = ({ name, pattern, handle }) => ({
  urlPattern: pattern,
  handler: handle || 'CacheFirst',
  options: {
    cacheName: name,
    expiration: {
      maxEntries: 500,
      maxAgeSeconds: 60 * 60 * 24 * 365 * 2 // <== 365 days
    },
    cacheableResponse: {
      statuses: [200]
    }
  }
})

export default {
  registerType: 'autoUpdate',
  injectRegister: 'auto',
  includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
  injectManifest: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,txt,eot}']
  },
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,txt,eot}'],
    globIgnores: ['**/node_modules/**/*', 'sw.js', 'workbox-*.js'],
    runtimeCaching: [
      getCache({
        pattern: /^https:\/\/192.168.31.99:5005\/.*/i,
        name: 'assets',
        handle: 'NetworkFirst'
      }),
      getCache({
        pattern: /^https:\/\/localhost\/.*/i,
        name: 'https-localhost'
      }),
      getCache({
        pattern: /materialdesignicons-webfont.0.0.0.woff2/,
        name: 'icons-woff2'
      }),
      getCache({
        pattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
        name: 'google-fonts-cache',
        handle: 'NetworkFirst'
      }),
      getCache({
        pattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
        name: 'gstatic-fonts-cache'
      })
    ]
  },
  manifest: {
    name: 'e-Cattle Remote App',
    short_name: 'e-Cattle Remote App',
    description: 'e-Cattle Remote App',
    theme_color: '#006D42',
    background_color: '#F8FAF5',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    icons: [
      {
        src: '/pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/pwa-maskable-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/pwa-maskable-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ]
  },
  devOptions: {
    enabled: true
  }
}
