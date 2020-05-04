/** @jsx jsx */
import { useStaticQuery, graphql } from 'gatsby'
import { jsx, Box, Container } from 'theme-ui'

import { PageHeader, SEO } from '@/components'
import { PositionList, ProjectList } from '@/components/partials/portfolio'
import { Layout } from '@/containers'

const QUERY = graphql`
  query {
    sanityRoute(slug: { current: { eq: "portfolio" } }) {
      page {
        id
        heading
        subheading
      }
      title
    }
  }
`

export const PortfolioPageTemplate = () => {
  const {
    sanityRoute: { page, title },
  } = useStaticQuery(QUERY)

  return (
    <Box as="section">
      <SEO title={title} />
      <Container sx={{ p: 4 }}>
        <PageHeader title={page.heading} subtitle={page.subheading} />
        <ProjectList />
        <PositionList />
      </Container>
    </Box>
  )
}

const PortfolioPage = ({ pageContext }) => (
  <Layout>
    <PortfolioPageTemplate {...pageContext} />
  </Layout>
)

export default PortfolioPage
