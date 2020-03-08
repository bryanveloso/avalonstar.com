import React from 'react'

import { Layout } from '@/containers'

import BlogPage from './blog-page.template'
import ColophonPage from './colophon-page.template'
import HistoryPage from './history-page.template'
import PortfolioPage from './portfolio-page.template'

const templateMap = {
  blog: BlogPage,
  colophon: ColophonPage,
  history: HistoryPage,
  portfolio: PortfolioPage,
}

const BaseTemplate = (props) => {
  const { path } = props
  const templateKey = path.replace('/', '')
  const Page = templateMap[templateKey]

  return (
    <Layout>
      <Page {...props} />
    </Layout>
  )
}

export default BaseTemplate
