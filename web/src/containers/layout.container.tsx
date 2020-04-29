/** @jsx jsx */
import { jsx, Container, Styled } from 'theme-ui'

import { Footer, Header } from '@/components'

const Layout = ({ children }) => (
  <Styled.root
    sx={{
      pt: 1,
      background: 'linear-gradient(#1a1f23, #0d0a11 512px)',
      borderTop: '0.25rem solid',
      borderColor: 'muted.dark',
    }}
  >
    <Header />
    <Container as="main">{children}</Container>
    <Footer />
  </Styled.root>
)

export default Layout
