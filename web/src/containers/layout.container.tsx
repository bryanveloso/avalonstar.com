import React from 'react'
import { Container } from 'theme-ui'

import { Footer, Header } from '@/components'

const Layout = ({ children }) => (
  <>
    <Header />
    <Container as="main">{children}</Container>
    <Footer />
  </>
)

export default Layout
