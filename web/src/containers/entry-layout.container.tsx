/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

import { Footer, Header } from '@/components'

const EntryLayout = ({ children }) => (
  <Styled.root
    sx={{
      pt: 1,
      background: 'linear-gradient(#1a1f23, #0d0a11 512px)',
      borderTop: '0.25rem solid',
      borderColor: 'muted.dark',
    }}
  >
    <Header />
    <main>{children}</main>
    <Footer />
  </Styled.root>
)

export default EntryLayout
