import { useStaticQuery, graphql } from 'gatsby'

const QUERY = graphql`
  {
    allSanityQuote {
      edges {
        node {
          id
          name
          handle
          body
        }
      }
    }
  }
`

export const useQuoteData = () => {
  const { allSanityQuote } = useStaticQuery(QUERY)
  return allSanityQuote.edges
}
