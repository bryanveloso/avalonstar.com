/** @jsx jsx */
import { motion, AnimatePresence } from 'framer-motion'
import { jsx, Box, Flex } from 'theme-ui'
import { Global } from '@emotion/core'

import { Footer, Header } from '@/components'

import './layout.css'
import { Fragment } from 'react'

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
  <Fragment>
    <Global styles={() => ({ html: { backgroundColor: '#05070d' } })} />
    <Box
      sx={{
        borderTop: '0.25rem solid',
        borderTopColor: 'gradient.darkest',
        boxShadow: 'inset 0 1px 0 #23292f',
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
  </Fragment>
)

export default Layout
