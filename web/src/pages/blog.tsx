/** @jsx jsx */
import { useStaticQuery, graphql } from 'gatsby'
import { jsx, Box, Container } from 'theme-ui'

import { PageHeader, SEO } from '@/components'
import { EntryList } from '@/components/partials'

const QUERY = graphql`
  query {
    sanityRoute(slug: { current: { eq: "blog" } }) {
      page {
        id
        heading
        subheading
      }
      title
    }
  }
`

export const BlogPageTemplate = () => {
  const {
    sanityRoute: { page, title },
  } = useStaticQuery(QUERY)

  return (
    <Box as="section">
      <SEO title={title} />
      <Container>
        <PageHeader title={page.heading} subtitle={page.subheading} />
        <EntryList />
      </Container>
    </Box>
  )
}

const BlogPage = ({ pageContext }) => <BlogPageTemplate {...pageContext} />

export default BlogPage
