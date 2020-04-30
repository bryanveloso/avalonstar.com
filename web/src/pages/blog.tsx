/** @jsx jsx */
import { useStaticQuery, graphql } from 'gatsby'
import { jsx, Box, Container } from 'theme-ui'

import { PageHeader, SEO } from '@/components'
import { EntryList } from '@/components/partials'
import { Layout } from '@/containers'

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
      <PageHeader title={page.heading} subtitle={page.subheading} />
      <Container sx={{ p: 4 }}>
        <EntryList />
      </Container>
    </Box>
  )
}

const BlogPage = ({ pageContext }) => (
  <Layout>
    <BlogPageTemplate {...pageContext} />
  </Layout>
)

export default BlogPage
