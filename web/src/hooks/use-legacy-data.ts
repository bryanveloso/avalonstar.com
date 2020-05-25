import { useStaticQuery, graphql } from 'gatsby'

const QUERY = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

export const useLegacyData = () => {
  const { allMdx } = useStaticQuery(QUERY)

  const edges = []
  allMdx.edges.forEach((edge) => {
    const o = Object.values(edge)
    edges.push(o)
  })
  return [].concat(...edges)
}
