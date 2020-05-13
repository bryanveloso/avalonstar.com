/** @jsx jsx */
import { useStaticQuery, graphql } from 'gatsby'
import { jsx, Box, Container } from 'theme-ui'

import { PageHeader, SEO } from '@/components'
import { PositionList, ProjectList } from '@/components/partials/portfolio'

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
      <Container>
        <PageHeader title={page.heading} subtitle={page.subheading} />
        <ProjectList />
        <PositionList />
      </Container>
    </Box>
  )
}

const PortfolioPage = ({ pageContext }) => <PortfolioPageTemplate {...pageContext} />

export default PortfolioPage
