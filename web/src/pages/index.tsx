/** @jsx jsx */
import { useStaticQuery, graphql } from 'gatsby'
import { jsx, Box, Container } from 'theme-ui'

import { SEO, PortableText } from '@/components'
import { EntryList, QuoteList } from '@/components/partials/home'
import { Layout } from '@/containers'

const QUERY = graphql`
  query {
    sanityRoute(slug: { current: { eq: "/" } }) {
      title
    }
  }
`

export const IndexPageTemplate = () => {
  const {
    sanityRoute: { title },
  } = useStaticQuery(QUERY)

  return (
    <Box as="section">
      <SEO title={title} />
      <Container sx={{ p: 4 }}>
        <EntryList />
        <QuoteList />
      </Container>
    </Box>
  )
}

const IndexPage = () => (
  <Layout>
    <IndexPageTemplate />
  </Layout>
)

export default IndexPage
