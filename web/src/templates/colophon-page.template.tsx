/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

import { PageHeader, SEO } from '@/components'

export const ColophonPageTemplate = props => {
  const { title, heading, subheading } = props

  return (
    <Box as="section">
      <SEO title={title} />
      <PageHeader title={heading} subtitle={subheading} />
    </Box>
  )
}

const ColophonPage = ({ pageContext }) => <ColophonPageTemplate {...pageContext} />

export default ColophonPage
