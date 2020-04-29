/** @jsx jsx */
import { useStaticQuery, graphql } from 'gatsby'
import { jsx, Box, Container } from 'theme-ui'

import { PageHeader, SEO } from '@/components'
import { EventList } from '@/components/partials/history'

const QUERY = graphql`
  {
    sanityPage(title: { eq: "History" }) {
      id
      subheading
      heading
    }
  }
`

export const HistoryPageTemplate = props => {
  const { title } = props
  const {
    sanityPage: { heading, subheading },
  } = useStaticQuery(QUERY)

  return (
    <Box as="section">
      <SEO title={title} />
      <PageHeader title={heading} subtitle={subheading} />
      <Container sx={{ p: 4 }}>
        <EventList />
      </Container>
    </Box>
  )
}

const HistoryPage = ({ pageContext }) => <HistoryPageTemplate {...pageContext} />

export default HistoryPage
