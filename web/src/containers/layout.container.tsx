/** @jsx jsx */
import { jsx, Container, Styled } from 'theme-ui'

import { Footer, Header } from '@/components'

const Layout = ({ children }) => (
  <Styled.root sx={{ background: 'linear-gradient(#1a1f23, #0d0a11 512px)' }}>
    <Header />
    <Container as="main">{children}</Container>
    <Footer />
  </Styled.root>
)

export default Layout
