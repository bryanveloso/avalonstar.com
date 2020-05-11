/** @jsx jsx */
import { motion, AnimateSharedLayout } from 'framer-motion'
import { Link } from 'gatsby'
import { useState } from 'react'
import { jsx, Box, Flex } from 'theme-ui'

import { useNavigationData } from '@/hooks'

import NavLink from './NavLink'

const MainNavigation = () => {
  const [selected, setSelected] = useState(0)
  const data = useNavigationData()
  return (
    <Box as="nav">
      <AnimateSharedLayout>
        <Flex
          as="ul"
          sx={{
            listStyle: 'none',
            m: 0,
            p: 0,
            color: 'muted.bluegrey',
            '&:hover': { color: 'white' },
          }}
        >
          {data.map(({ node }) => {
            const { title, slug } = node
            return (
              <motion.li animate key={slug.current} sx={{ pl: 4 }}>
                <Link
                  to={`/${slug.current}`}
                  activeClassName="active"
                  partiallyActive
                  sx={{ variant: 'links.nav' }}
                  onClick={() => setSelected(node.order)}
                >
                  {title}
                  {/* {node.order === selected && (
                    <motion.div
                      layoutId="underline"
                      sx={{ width: '100%', height: 2, bg: 'main.avablue' }}
                    />
                  )} */}
                </Link>
              </motion.li>
            )
          })}
        </Flex>
      </AnimateSharedLayout>
    </Box>
  )
}

export default MainNavigation
