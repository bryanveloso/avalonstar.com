// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
})

const differenceInYears = require('date-fns/differenceInYears')
const clientConfig = require('./client-config')

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://www.avalonstar.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isProd = process.env.NODE_ENV === 'production'
const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    title: `Avalonstar`,
    siteUrl: `https://www.avalonstar.com`,
    description: `Avalonstar is the ${differenceInYears(
      new Date(),
      new Date(2000, 9, 28),
    )}-year-old personal website of Bryan Veloso: content creator, retired professional user interface designer, and compass of purpose.`,
    author: `@avalonstar`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-mdx`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.svg$/,
          omitKeys: ['xmlnsDc', 'xmlnsCc', 'xmlnsRdf', 'xmlnsSvg'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: { typekit: { id: 'ead1rfn' } },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Avalonstar`,
        short_name: `Avalonstar`,
        start_url: `/`,
        background_color: `#1a1f23`,
        theme_color: `#1a1f23`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
    {
      resolve: `gatsby-transform-portable-text`,
      options: {
        extendTypes: [{ typeName: `SanityEntry`, contentFieldName: 'body' }],
      },
    },
    `gatsby-plugin-transition-link`,
  ],
}
