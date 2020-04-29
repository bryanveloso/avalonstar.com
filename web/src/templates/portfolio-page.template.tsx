/** @jsx jsx */
import { useStaticQuery, graphql } from 'gatsby'
import { jsx, Box, Container } from 'theme-ui'

import { PageHeader, SEO } from '@/components'
import { PositionList, ProjectList } from '@/components/partials/portfolio'

const QUERY = graphql`
  {
    sanityPage(title: { eq: "Portfolio" }) {
      id
      subheading
      heading
    }
  }
`

export const PortfolioPageTemplate = props => {
  const { title } = props
  const {
    sanityPage: { heading, subheading },
  } = useStaticQuery(QUERY)

  return (
    <Box as="section">
      <SEO title={title} />
      <PageHeader title={heading} subtitle={subheading} />
      <Container sx={{ p: 4 }}>
        <ProjectList />
        <PositionList />
      </Container>
    </Box>
  )
}

const PortfolioPage = ({ pageContext }) => <PortfolioPageTemplate {...pageContext} />

export default PortfolioPage
