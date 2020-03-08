/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

import { PageHeader, SEO } from '@/components'
import { PositionList, ProjectList } from '@/components/partials/portfolio'


export const PortfolioPageTemplate = (props) => {
  const { title, heading, subheading } = props

  return (
    <Box as="section">
      <SEO title={title} />
      <PageHeader title={heading} subtitle={subheading} />
      <ProjectList />
      <PositionList />
    </Box>
  )
}

const PortfolioPage = ({ pageContext }) => <PortfolioPageTemplate {...pageContext} />

export default PortfolioPage
