const path = require('path')
const format = require('date-fns/format')
const isFuture = require('date-fns/isFuture')
const parseISO = require('date-fns/parseISO')

async function createEntryPages(graphql, actions) {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allSanityEntry(filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const entryEdges = (result.data.allSanityEntry || {}).edges || []

  entryEdges
    .filter(edge => !isFuture(parseISO(edge.node.publishedAt)))
    .forEach((edge, index) => {
      const { id, slug = {}, publishedAt } = edge.node
      const dateSegment = format(parseISO(publishedAt), 'yyyy')
      const path = `/blog/${dateSegment}/${slug.current}`

      createPage({
        path,
        component: require.resolve('./src/templates/entry-page.template.tsx'),
        context: { id },
      })
    })
}

async function createRoutePages(graphql, actions) {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allSanityRoute(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            heading
            subheading
            title
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const routeEdges = (result.data.allSanityRoute || {}).edges || []

  routeEdges
    .forEach((edge, index) => {
      const { id, slug = {}, title, heading, subheading } = edge.node
      createPage({
        path: `/${slug.current}`,
        component: require.resolve('./src/templates/base-page.template.tsx'),
        context: { id, title, heading, subheading },
      })
    })
}

exports.createPages = async ({ graphql, actions }) => {
  await createEntryPages(graphql, actions)
  await createRoutePages(graphql, actions)
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  })
}
