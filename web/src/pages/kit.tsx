/** @jsx jsx */
import { useStaticQuery, graphql } from 'gatsby'
import { jsx, Box, Container } from 'theme-ui'

import { PageHeader, SEO } from '@/components'

const QUERY = graphql`
  query {
    sanityRoute(slug: { current: { eq: "kit" } }) {
      page {
        id
        heading
        subheading
      }
      title
    }
  }
`

export const KitPageTemplate = () => {
  const {
    sanityRoute: { page, title },
  } = useStaticQuery(QUERY)

  return (
    <Box as="section">
      <SEO title={title} />
      <Container sx={{ p: 4 }}>
        <PageHeader title={page.heading} subtitle={page.subheading} />
      </Container>
    </Box>
  )
}

const KitPage = ({ pageContext }) => <KitPageTemplate {...pageContext} />

export default KitPage
