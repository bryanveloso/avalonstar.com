/* eslint-disable prefer-destructuring */
import { alpha } from '@theme-ui/color'

import colors from './colors'

const breakpoints = ['600px', '900px', '1200px', '1800px']
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

const space = [
  0,
  '0.25rem',
  '0.5rem',
  '1rem',
  '1.5rem',
  '2rem',
  '2.5rem',
  '3rem',
  '4rem',
  '8rem',
  '16rem',
  '32rem',
]

const radii = [0, 2, 4, 16, 9999, '100%']

const fonts = {
  adelle: 'adelle-sans, sans-serif',
  freight: 'freight-sans-pro, sans-serif',
  body: 'adelle-sans, sans-serif',
  heading: 'freight-sans-pro, sans-serif',
}

const fontSizes = [
  '0.75rem',
  '0.875rem',
  '1rem',
  '1.125rem',
  '1.25rem',
  '1.5rem',
  '1.75rem',
  '2rem',
  '2.5rem',
  '3rem',
  '3.5rem',
]

const fontWeights = {
  light: 300,
  book: 400,
  bold: 700,
  black: 900,

  // Aliases.
  body: 400,
  heading: 700,
}

const text = {
  // ...
  heading: {
    fontFamily: 'heading',
  },
  hero: {
    variant: 'styles.h1',
    fontWeight: 'black',
  },
  subhero: {
    color: 'muted.lightbluegrey',
    fontFamily: 'adelle',
    fontWeight: 'book',
    fontStyle: 'italic',
  },

  // ...
  title: {
    fontSize: [6, 9, 10, null],
    lineHeight: ['2.5rem', '3.5rem', '4rem', null],
  },

  // ...
  date: {
    color: 'main.avagreen',
    fontWeight: 'book',
    fontSize: 1,
    textTransform: 'uppercase',
  },

  // ...
  time: {
    color: 'main.avagreen',
    fontSize: 1,
    textTransform: 'uppercase',
  },

  // ...
  quote: {
    color: 'muted.lightbluegrey',
    fontFamily: 'freight',
    fontSize: [2, 4, null, null],
    lineHeight: [1.4],
    pb: 2,
  },
}

const links = {
  nav: {
    color: 'inherit',
    boxShadow: '0 0 1px rgba(0, 0, 0, 0)',
    fontFamily: 'freight',
    fontSize: 1,
    fontWeight: 900,
    ml: 5,
    position: 'relative',
    pt: 1,
    textTransform: 'uppercase',
    textDecoration: 'none',
    transform: 'perspective(1px) translateZ(0)',
    transition: 'color 0.3s ease-out',
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      right: '100%',
      backgroundColor: 'main.avablue',
      height: 2,
      zIndex: -1,
    },
    '&.active': { color: 'main.avablue' },
    '&:hover': { color: 'main.avablue' },
  },
  title: {
    color: '#ffffff',
    fontFamily: 'freight',
    fontSize: 1,
    fontWeight: 'bold',
    textDecoration: 'none',
  },

  // ...
  button: {
    appearance: 'none',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: 'inherit',
    textDecoration: 'none',
    fontFamily: 'freight',
    fontSize: 1,
    fontWeight: 900,
    m: 0,
    px: 3,
    py: 2,
    border: 0,
    borderRadius: 1,
    textTransform: 'uppercase',
  },
  primaryButton: {
    variant: 'links.button',
    backgroundColor: 'main.avapurple',
    color: 'main.light',
  },
}

const styles = {
  root: {
    fontFamily: 'body',
    fontWeight: 'book',
  },
  a: {
    color: 'main.avablue',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  },
  h1: {
    variant: 'text.heading',
    fontSize: [6, 9, 10, null],
    lineHeight: ['2.5rem', '3.5rem', '4rem', null],
  },
  h2: {
    variant: 'text.heading',
    fontWeight: 'black',
    fontSize: [5, 8, 9, null],
    lineHeight: ['2rem', '3rem', '3.5rem', null],
  },
  h3: {
    variant: 'text.heading',
    fontSize: [4, 7, 8, null],
    lineHeight: ['2rem', '2.5rem', '3rem', null],
  },
  h4: {
    variant: 'text.heading',
    fontSize: [3, 5, 7, null],
    lineHeight: ['1.5rem', '2rem', '2.5rem', null],
  },
  h5: {
    variant: 'text.heading',
    fontSize: [2, 3, 5, null],
    lineHeight: ['1.5rem', '1.5rem', '2rem', null],
  },
  h6: {
    variant: 'text.heading',
    fontSize: [1, 2, 3, null],
    lineHeight: '1.5rem',
  },
  blockquote: {
    boxShadow: 'inset 8px 0 0 0',
    color: 'muted.lightgreen',
    fontSize: [2, 2, 3, 3],
    fontStyle: 'italic',
    mx: 0,
    my: 6,
    px: 6,
    py: 3,
  },
  hr: {
    border: 0,
    borderBottom: '1px solid',
  },
  img: {
    maxWidth: '100%',
  },
  p: {
    fontSize: [1, 1, 2, 2],
    lineHeight: [1.7, 1.7, 2, 2],
    mb: 4,
  },
}

const buttons = {
  menu: {
    display: ['block', 'none'],
  },
}

const structure = {
  caption: {
    borderBottom: '1px solid',
    borderColor: alpha('muted.bluegrey', 0.20),
    color: 'muted.bluegrey',
    fontSize: 0,
    p: 2,
    textAlign: 'right',
  },
  metadata: {
    fontSize: 1,
    textTransform: 'uppercase',
  },
}

const sizes = {
  // container: 1536,
}

const layout = {
  container: {
    maxWidth: [480, 720, 960, 1440],
    mx: 'auto',
  },
  entry: {
    maxWidth: [480, 720, 960],
    mx: 'auto',
  },
}

const shadows = {
  box: 'inset 0 0 0 1px #fff',
}

const cards = {
  position: {
    mb: 5,
  },
  entry: {
    borderRadius: 2,
    overflow: 'hidden',
  },
  compact: {
    padding: 1,
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'muted',
  },
}

export default {
  breakpoints,
  space,
  radii,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  text,
  links,
  styles,
  buttons,
  structure,
  cards,
  layout,
  shadows,
  sizes,
}
