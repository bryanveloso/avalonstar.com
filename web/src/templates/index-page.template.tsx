/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

import { PageHeader, SEO } from '@/components'

export const IndexPageTemplate = (props) => {
  const { title, subtitle } = props

  return (
    <Box as="section">
      <SEO title="Index" />
      <PageHeader title={title} subtitle={subtitle} />
    </Box>
  )
}

const IndexPage = () => <IndexPageTemplate />

export default IndexPage
