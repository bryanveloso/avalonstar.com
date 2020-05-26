/** @jsx jsx */
import { motion, AnimatePresence } from 'framer-motion'
import { jsx, Box, Flex } from 'theme-ui'

import { Footer, Header } from '@/components'

import './layout.css'

const duration = 0.3
const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration,
      delay: duration,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: { duration },
  },
}

const Layout = ({ children, location }) => (
  <Box
    sx={{
      borderTop: '0.25rem solid',
      borderTopColor: 'gradient.darkest',
      width: '100vw',
    }}
  >
    <Header />
    <Flex sx={{ variant: 'layout.wrapper', minHeight: '100vh', flexDirection: 'column' }}>
      <AnimatePresence initial={false}>
        <motion.main
          key={location.pathname}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
          sx={{ flexGrow: 1 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </Flex>
  </Box>
)

export default Layout
