/** @jsx jsx */
import { jsx, Box, Flex } from 'theme-ui'

import { useNavigationData } from '@/hooks'
import NavigationMenu from '@/images/navigation-menu.svg'

import NavLink from './NavLink'

const MobileNavigation = () => {
  const data = useNavigationData()
  return (
    <Box sx={{ display: ['block', 'none'] }}>
      <Flex as="nav" sx={{ alignItems: 'center', mt: 2 }}>
        <Box mr={2} pr={2} sx={{ borderRight: '1px solid', borderColor: 'gradient.lighter' }}>
          <NavigationMenu
            sx={{
              color: 'muted.bluegrey',
              height: '15px',
              position: 'relative',
              top: '1px',
            }}
          />
        </Box>
        <Flex
          as="ul"
          sx={{
            color: 'muted.bluegrey',
            flex: '1 1 auto',
            listStyle: 'none',
            m: 0,
            p: 0,
            position: 'relative',
            top: '-1px',
          }}
        >
          {data.map(({ node }) => {
            const { title, slug } = node
            return (
              <Box as="li" key={slug.current} pr={3}>
                <NavLink to={`/${slug.current}`}>{title}</NavLink>
              </Box>
            )
          })}
        </Flex>
      </Flex>
    </Box>
  )
}

export default MobileNavigation
