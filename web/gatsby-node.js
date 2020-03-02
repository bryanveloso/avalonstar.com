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
        component: require.resolve('./src/templates/entry-page.template.jsx'),
        context: { id },
      })
    })
}

exports.createPages = async ({ graphql, actions }) => {
  await createEntryPages(graphql, actions)
}
