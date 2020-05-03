import React from 'react'
import { Container } from 'theme-ui'

import { Footer, Header } from '@/components'

const EntryLayout = ({ children }) => (
  <>
    <Header />
    <Container as="main">{children}</Container>
    <Footer />
  </>
)

export default EntryLayout
