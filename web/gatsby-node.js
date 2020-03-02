const { isFuture, format, parseISO } = require('date-fns')

async function createEntryPages(graphql, actions) {
  const { createPage } = actions
  const result = await graphql(`
    allSanityEntry(
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
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
  `)

  if (result.errors) throw result.errors

  const entryEdges = (result.data.allSanityEntry || {}).edges || []

  entryEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const { id, slug = {}, publishedAt } = edge.node
      const dateSegment = format(parseISO(publishedAt), 'yyyy')
      const path = `/blog/${dateSegment}/${slug.current}`

      createPage({
        path,
        component: require.resolve('./src/templates/entry.js'),
        context: { id },
      })
    })
}

exports.createPages = async ({ graphql, actions }) => {
  await createEntryPages(graphql, actions)
}
