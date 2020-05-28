import { useStaticQuery, graphql } from 'gatsby'

const QUERY = graphql`
  {
    allSanityProject(filter: { isFeatured: { eq: true } }, sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          name
          date(formatString: "MMMM YYYY")
          slug {
            current
          }
          position {
            company
            slug {
              current
            }
          }
          projectUrl
          announcementUrl
          _rawSummary(resolveReferences: { maxDepth: 10 })
          _rawInvolvement(resolveReferences: { maxDepth: 10 })
          _rawBody(resolveReferences: { maxDepth: 10 })
          image {
            asset {
              fluid(maxWidth: 1080) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`

export const useProjectData = () => {
  const { allSanityProject } = useStaticQuery(QUERY)
  return allSanityProject.edges
}
