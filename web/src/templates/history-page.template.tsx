/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui'

import { PageHeader, SEO } from '@/components'

import BookStar from '@/images/book-star.svg'
import { EventList } from '@/components/partials/history'

export const HistoryPageTemplate = props => {
  const { title, heading, subheading } = props

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
