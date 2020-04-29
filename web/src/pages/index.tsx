/** @jsx jsx */
import { useStaticQuery, graphql } from 'gatsby'
import { jsx, Box, Container } from 'theme-ui'

import { SEO } from '@/components'
import { QuoteList } from '@/components/partials/home'
import { Layout } from '@/containers'

const QUERY = graphql`
  {
    sanityPage(title: { eq: "Home" }) {
      id
    }
  }
`

export const IndexPageTemplate = () => {
  const { sanityPage } = useStaticQuery(QUERY)

  return (
    <Layout>
      <Box as="section">
        <SEO title="Welcome" />
        <Container sx={{ p: 4 }}>
          <QuoteList />
        </Container>
      </Box>
    </Layout>
  )
}

const IndexPage = () => <IndexPageTemplate />

export default IndexPage
