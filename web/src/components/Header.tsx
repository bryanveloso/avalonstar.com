/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx, Box, Container, Flex } from 'theme-ui'

import Avalonstar from '@/images/avalonstar.png'
import Logotype from '@/images/logotype.svg'

import MainNavigation from './MainNavigation'
import MobileNavigation from './MobileNavigation'
import TwitchStatus from './TwitchStatus'

const Header = () => {
  return (
    <header>
      <TwitchStatus />
      <Container sx={{ variant: 'layout.wrapper', pt: [4, 6], pb: 4 }}>
        <Flex sx={{ alignItems: [null, 'center'], flexDirection: ['column', 'row'] }}>
          <Flex sx={{ flex: '1 1 auto' }}>
            <Link to="/" sx={{ alignItems: 'center', display: 'flex', flex: '1 1 auto' }}>
              <img src={Avalonstar} alt="logo" sx={{ height: ['1.5rem', '2rem'], mr: 2 }} />
              <Logotype sx={{ height: ['1.25rem', '1.75rem'] }} />
            </Link>
          </Flex>
          <Box variant="components.navigation">
            <MainNavigation />
            <MobileNavigation />
          </Box>
        </Flex>
      </Container>
    </header>
  )
}

export default Header
