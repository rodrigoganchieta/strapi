export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'http://localhost:1337'),
  app: {
    keys: env.array('APP_KEYS'),
  },
  admin: {
    url: '/admin',
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    allowedHosts: [
      'localhost',
      'strapi.bibliasagrada.digital',
      'www.strapi.bibliasagrada.digital',
    ],
  },
});
