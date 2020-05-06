/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx, Box, Container, Flex, MenuButton } from 'theme-ui'

import Logotype from '@/images/logotype.svg'

import NavLink from './NavLink'

const Header = () => (
  <Container as="header" sx={{ mx: 'auto', px: 4, py: [4, 5] }}>
    <Flex sx={{ alignItems: 'baseline' }}>
      <Box sx={{ flex: '1 1 auto' }}>
        <Link to="/">
          <Logotype sx={{ height: ['1.5rem', '2.0rem'] }} />
        </Link>
      </Box>
      <Box as="nav" sx={{ display: ['none', 'block'] }}>
        <NavLink to="/history/">History</NavLink>
        <NavLink to="/portfolio/">Portfolio</NavLink>
        <NavLink to="/blog/">Blog</NavLink>
      </Box>
      <MenuButton aria-label="Toggle Menu" />
    </Flex>
  </Container>
)

export default Header
