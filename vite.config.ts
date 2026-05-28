import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import CONFIG from './gitprofile.config';
import { createHtmlPlugin } from 'vite-plugin-html';

const canonicalUrl = CONFIG.social.website || 'https://crisbarrera.com';

const sameAs: string[] = [
  `https://github.com/${CONFIG.github.username}`,
  CONFIG.social.linkedin
    ? `https://www.linkedin.com/in/${CONFIG.social.linkedin}`
    : '',
  CONFIG.social.x ? `https://x.com/${CONFIG.social.x}` : '',
  CONFIG.social.researchGate
    ? `https://www.researchgate.net/profile/${CONFIG.social.researchGate}`
    : '',
].filter(Boolean);

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: CONFIG.seo.title || 'Portfolio',
      url: canonicalUrl,
      description: CONFIG.seo.description || '',
    },
    {
      '@type': 'Person',
      name: 'Cristian Barrera',
      url: canonicalUrl,
      image: CONFIG.seo.imageURL || '',
      description: CONFIG.seo.description || '',
      sameAs,
      email: CONFIG.social.email || '',
      telephone: CONFIG.social.phone || '',
      jobTitle: 'Software Developer II (Medical Imaging)',
    },
  ],
};

const structuredDataScript = `<script type="application/ld+json">${JSON.stringify(structuredData).replace(/<\//g, '<\\/')}</script>`;

// https://vitejs.dev/config/
export default defineConfig({
  base: CONFIG.base || '/',
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          metaTitle: CONFIG.seo.title,
          metaDescription: CONFIG.seo.description,
          metaImageURL: CONFIG.seo.imageURL,
          metaCanonicalURL: canonicalUrl,
          structuredDataScript,
          googleAnalyticsScript: CONFIG.googleAnalytics.id
            ? `<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${CONFIG.googleAnalytics.id}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${CONFIG.googleAnalytics.id}');
</script>`
            : '',
        },
      },
    }),
    ...(CONFIG.enablePWA
      ? [
          VitePWA({
            registerType: 'autoUpdate',
            workbox: {
              navigateFallback: undefined,
            },
            includeAssets: ['logo.png'],
            manifest: {
              name: CONFIG.seo.title,
              short_name: 'Cris Barrera',
              description: CONFIG.seo.description,
              start_url: '/',
              scope: '/',
              icons: [
                {
                  src: 'logo.png',
                  sizes: '64x64 32x32 24x24 16x16 192x192 512x512',
                  type: 'image/png',
                },
              ],
            },
          }),
        ]
      : []),
  ],
  define: {
    CONFIG: CONFIG,
  },
});
