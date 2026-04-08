/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://avwinnipeg.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/admin',
      },
    ],
  },
  exclude: ['/admin', '/api/*'],
}
