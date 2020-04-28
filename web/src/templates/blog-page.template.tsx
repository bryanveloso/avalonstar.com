/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui'

import { PageHeader, SEO } from '@/components'
import { EntryList } from '@/components/partials'

export const BlogPageTemplate = props => {
  const { title, heading, subheading } = props

  return (
    <Box as="section">
      <SEO title={title} />
      <PageHeader title={heading} subtitle={subheading} />
      <Container sx={{ p: 4 }}>
        <EntryList />
      </Container>
    </Box>
  )
}

const BlogPage = ({ pageContext }) => <BlogPageTemplate {...pageContext} />

export default BlogPage
