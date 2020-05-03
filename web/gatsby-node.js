const format = require('date-fns/format')
const isFuture = require('date-fns/isFuture')
const parseISO = require('date-fns/parseISO')
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path')

const ENTRY_FILENAME_REGEX = /([0-9]{4})-([0-9]+)-([0-9]+)-(.+).mdx$$/

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const { relativePath } = getNode(node.parent)
    const match = ENTRY_FILENAME_REGEX.exec(relativePath)
    const year = match[1]
    const filename = match[4]
    createNodeField({
      node,
      name: `slug`,
      value: `/blog/${year}/${filename}/`,
    })
  }
}

async function createEntryPages(graphql, actions) {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allSanityEntry(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
        sort: { fields: publishedAt, order: ASC }
      ) {
        edges {
          node {
            id
            publishedAt
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

  const entryEdges = (result.data.allSanityEntry || {}).edges || []

  entryEdges
    .filter((edge) => !isFuture(parseISO(edge.node.publishedAt)))
    .forEach((edge, index) => {
      const { id, slug = {}, publishedAt } = edge.node
      const dateSegment = format(parseISO(publishedAt), 'yyyy')
      const path = `/blog/${dateSegment}/${slug.current}`

      createPage({
        path,
        component: require.resolve('./src/templates/entry-page.template.tsx'),
        context: {
          id,
          pathSlug: path,
          prev: index === 0 ? null : entryEdges[index - 1].node,
          next: index === entryEdges.length - 1 ? null : entryEdges[index + 1].node,
        },
      })
    })
}

async function createLegacyPages(graphql, actions) {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: ASC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const posts = (result.data.allMdx || {}).edges || []

  posts.forEach((post, index) => {
    createPage({
      path: post.node.fields.slug,
      component: require.resolve('./src/templates/legacy-page.template.tsx'),
      context: {
        slug: post.node.fields.slug,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await createEntryPages(graphql, actions)
  await createLegacyPages(graphql, actions)
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
