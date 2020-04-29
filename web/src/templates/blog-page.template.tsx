/** @jsx jsx */
import { useStaticQuery, graphql } from 'gatsby'
import { jsx, Box, Container } from 'theme-ui'

import { PageHeader, SEO } from '@/components'
import { EntryList } from '@/components/partials'

const QUERY = graphql`
  {
    sanityPage(title: { eq: "Blog" }) {
      id
      subheading
      heading
    }
  }
`

export const BlogPageTemplate = props => {
  const { title } = props
  const {
    sanityPage: { heading, subheading },
  } = useStaticQuery(QUERY)

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
