/** @jsx jsx */
import { jsx, Container, Styled } from 'theme-ui'

const EntryLayout = ({ children }) => {
  return (
    <Styled.root sx={{ background: 'linear-gradient(#1a1f23, #0d0a11 512px)' }}>
      <Container variant="entry">
        <main>{children}</main>
      </Container>
    </Styled.root>
  )
}

export default EntryLayout
