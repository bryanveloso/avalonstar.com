/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

import { PageHeader, SEO } from '@/components'
import { Layout } from '@/containers'

export const ColophonPageTemplate = props => {
  const { title, heading, subheading } = props

  return (
    <Box as="section">
      <SEO title={title} />
      <PageHeader title={heading} subtitle={subheading} />
    </Box>
  )
}

const ColophonPage = ({ pageContext }) => (
  <Layout>
    <ColophonPageTemplate {...pageContext} />
  </Layout>
)

export default ColophonPage
