/** @jsx jsx */
import { useBreakpointIndex } from '@theme-ui/match-media'
import { Link } from 'gatsby'
import { jsx, Box, Container, Flex } from 'theme-ui'

import Avalonstar from '@/images/avalonstar.svg'
import Logotype from '@/images/logotype.svg'

import MainNavigation from './MainNavigation'
import MobileNavigation from './MobileNavigation'

const Header = () => {
  const breakpoint = useBreakpointIndex()
  return (
    <header
      sx={{
        borderTop: '0.25rem solid',
        borderTopColor: 'muted.dark',
        width: '100vw',
      }}
    >
      <Container sx={{ py: 4 }}>
        <Flex sx={{ alignItems: [null, 'center'], flexDirection: ['column', 'row'] }}>
          <Flex sx={{ flex: '1 1 auto' }}>
            <Link to="/" sx={{ alignItems: 'center', display: 'flex', flex: '1 1 auto' }}>
              <Avalonstar sx={{ height: ['1.5rem', '2rem'], mr: 2 }} />
              <Logotype sx={{ height: ['1.25rem', '1.75rem'] }} />
            </Link>
          </Flex>
          <Box>{breakpoint === 0 ? <MobileNavigation /> : <MainNavigation />}</Box>
        </Flex>
      </Container>
    </header>
  )
}

export default Header
