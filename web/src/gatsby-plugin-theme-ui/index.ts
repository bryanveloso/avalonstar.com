/* eslint-disable prefer-destructuring */
import { alpha } from '@theme-ui/color'

import { colors } from './colors'
import { styles } from './mdx'

const breakpoints = ['600px', '900px', '1200px', '1800px']

const space = [0, '0.25rem', '0.5rem', '1rem', '1.5rem', '2rem', '2.5rem', '3rem', '4rem', '8rem', '16rem', '32rem']

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

const lineHeights = ['1.5rem', '2rem', '2.5rem', '3rem', '3.5rem', '4rem']

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
  primary: {},
  secondary: {
    color: 'muted.lightbluegrey',
    fontFamily: 'adelle',
    fontWeight: 'book',
    fontStyle: 'italic',
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
  entry: {
    title: {
      fontSize: [7, 9],
      lineHeight: ['2rem', '3rem'],
      py: [2, 0],
    },
    h3: {
      variant: 'styles.h3',
      textTransform: 'uppercase',
    },
    p: {
      fontSize: 2,
      lineHeight: 1,
      mb: 4,
    },
    navigation: {
      color: 'muted.bluegrey',
      fontSize: 1,
      textTransform: 'uppercase',
      mb: [2],
    },
  },

  history: {
    date: {
      fontWeight: 'book',
      fontSize: 1,
      textTransform: 'uppercase',
    },
    title: {
      fontFamily: 'freight',
      fontSize: [4, 4, 6, null],
      fontWeight: 'bold',
    },
  },

  // ...
  date: {
    color: 'main.avagreen',
    fontWeight: 'book',
    fontSize: [0, 1],
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
    fontFamily: 'freight',
    fontSize: 1,
    fontWeight: 'black',
    textDecoration: 'none',
    textTransform: 'uppercase',
    transition: 'all 300ms ease-out',
    '&.active': { color: 'main.avablue' },
    '&:hover': {
      color: 'main.avablue',
    },
  },
  title: {
    color: 'white',
    fontFamily: 'freight',
    fontSize: 1,
    fontWeight: 'bold',
    textDecoration: 'none',
  },

  // ...
  socials: {
    color: 'main.avablue',
    fontSize: 1,
    fontWeight: 'bold',
    svg: {
      verticalAlign: 'middle',
    },
    span: {
      display: ['none', 'inline'],
      pl: 2,
      fontSize: 0,
    },
  },

  // ...
  entry: {
    navigation: {
      variant: 'styles.a',
      fontFamily: 'heading',
      fontSize: [5],
      lineHeight: ['1.5rem'],
    },
  },

  // ...
  header: {
    variant: 'styles.a',
    border: 'none',
    color: 'white',
    '&:hover': {
      color: 'main.avagreen',
    },
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

const buttons = {
  menu: {
    display: ['block', 'none'],
  },
}

const zIndices = {
  '0': '0',
  '10': '10',
  '20': '20',
  '30': '30',
  '40': '40',
  '50': '50',
  auto: 'auto',
}

const structure = {
  caption: {
    borderBottom: '1px solid',
    borderColor: alpha('muted.bluegrey', 0.2),
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

const layout = {
  wrapper: {
    maxWidth: [480, 720, 960, 1440],
    mx: 'auto',
    px: [4, null, 8, 9],
  },
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
  card: {
    xs: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    sm: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    md: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    lg: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    xl: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  },
}

const cards = {
  position: {
    mb: 5,
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
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  text,
  links,
  buttons,
  zIndices,
  structure,
  cards,
  layout,
  shadows,

  // ...
  colors,

  // ...
  styles,
}
