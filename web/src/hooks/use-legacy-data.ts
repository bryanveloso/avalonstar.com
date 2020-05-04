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
            date
          }
        }
      }
    }
  }
`

export const useLegacyData = () => {
  const { allMdx } = useStaticQuery(QUERY)
  return allMdx.edges
}
