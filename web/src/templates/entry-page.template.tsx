/** @jsx jsx */
import { graphql } from 'gatsby'
import { jsx, Box } from 'theme-ui'

import { EntryLayout } from '../containers'
import SEO from '../components/seo'

const Entry = (props) => (
  <Box as="article">
    <SEO />
    {JSON.stringify(props)}
  </Box>
  )

const EntryPageTemplate = (props) => (
  <EntryLayout>
    <Entry {...props} />
  </EntryLayout>
  )

const EntryPage = (props) => <EntryPageTemplate {...props} />

export default EntryPage

export const query = graphql`
  query EntryPageTemplateQuery($id: String!) {
    entry: sanityEntry(id: { eq: $id }) {
      id
      publishedAt
      coverImage {
        alt
      }
      title
      slug {
        current
      }
      _rawBody(resolveReferences: { maxDepth: 5 })
      author {
        name
      }
    }
  }
`
