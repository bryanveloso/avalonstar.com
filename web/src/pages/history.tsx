/** @jsx jsx */
import { useStaticQuery, graphql } from 'gatsby'
import { jsx, Box, Container } from 'theme-ui'

import { PageHeader, SEO } from '@/components'
import { EventList } from '@/components/partials/history'
import { Layout } from '@/containers'

const QUERY = graphql`
  {
    sanityRoute(slug: { current: { eq: "history" } }) {
      page {
        id
        heading
        subheading
      }
      title
    }
  }
`

export const HistoryPageTemplate = () => {
  const {
    sanityRoute: { page, title },
  } = useStaticQuery(QUERY)

  return (
    <Box as="section">
      <SEO title={title} />
      <PageHeader title={page.heading} subtitle={page.subheading} />
      <Container sx={{ p: 4 }}>
        <EventList />
      </Container>
    </Box>
  )
}

const HistoryPage = ({ pageContext }) => (
  <Layout>
    <HistoryPageTemplate {...pageContext} />
  </Layout>
)

export default HistoryPage
