/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

import { Footer, Header } from '@/components'

const EntryLayout = ({ children }) => (
  <Styled.root sx={{ background: 'linear-gradient(#1a1f23, #0d0a11 512px)' }}>
    <Header />
    <main>{children}</main>
    <Footer />
  </Styled.root>
  )

export default EntryLayout
