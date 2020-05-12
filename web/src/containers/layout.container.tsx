/** @jsx jsx */
import { motion, AnimatePresence } from 'framer-motion'
import { jsx, Flex } from 'theme-ui'

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
  <Flex sx={{ minHeight: '100vh', flexDirection: 'column' }}>
    <Header />
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
)

export default Layout
