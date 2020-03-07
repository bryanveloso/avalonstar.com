/** @jsx jsx */
import { Link } from 'gatsby'
import {
 jsx, Box, Container, Flex,
} from 'theme-ui'

import { NavLink } from '@/components'
import Logotype from '@/images/logotype.svg'

const Header = () => (
  <Container as="header" sx={{ mx: 'auto', px: 4, py: 5 }}>
    <Flex sx={{ alignItems: 'baseline' }}>
      <Box sx={{ flex: '1 1 auto' }}>
        <Link to="/">
          <Logotype sx={{ height: '36px' }} />
        </Link>
      </Box>
      <Box as="nav">
        <NavLink to="/history/">History</NavLink>
        <NavLink to="/portfolio/">Portfolio</NavLink>
        <NavLink to="/blog/">Blog</NavLink>
      </Box>
    </Flex>
  </Container>
)

export default Header
