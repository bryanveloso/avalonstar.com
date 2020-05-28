/* eslint-disable prefer-destructuring */
import { alpha } from '@theme-ui/color'

const BASE_FONT = 16
const BASE_LINE_HEIGHT = 1.8
const BASELINE = BASE_FONT * BASE_LINE_HEIGHT

const BREAKPOINTS = ['600px', '900px', '1200px', '1800px']

const FONT_SIZES = [12, 14, 16, 18, 24, 32, 48, 56]
const LINE_HEIGHTS = FONT_SIZES.map((f) => (Math.ceil(f / BASELINE) * BASELINE) / f)

export const TEXT_MEGA = {
  fontSize: [5, 6],
  lineHeight: [4, 7],
}

export const TEXT_HUGE = {
  fontSize: [5],
  lineHeight: [4],
}

export const TEXT_XLARGE = {
  fontSize: [4],
  lineHeight: [4],
}

export const TEXT_LARGE = {
  fontSize: [3],
  lineHeight: [3],
}

export const COLORS = {
  // ...
  text: '#efefef',
  background: '#05070d',
  primary: '#1cdaf4',
  highlight: 'rgba(255, 255, 255, 0.1)',

  // ...
  main: {
    avagreen: '#5be058',
    avapurple: '#6644e8',
    avablue: '#1cdaf4',
    avayellow: '#ffdd33',
    dark: '#241f33',
    light: '#efefef',
  },
  muted: {
    purple: '#928add',
    bluegrey: '#6d8591',
    yellow: '#fff683',
    lightgreen: '#e7f7e7',
    midgrey: '#939393',
    dark: '#0d0a11',
    green: '#bbf4b0',
    lightbluegrey: '#b4cbd6',
  },
  gradient: {
    lighter: '#23292f',
    darker: '#1a1f23',
    darkest: '#05070d',
  },
}

const baselineMultiple = (w) => (theme) => theme.baseline * w

export default {
  baseline: BASELINE,
  space: [0, '0.25rem', '0.5rem', '1rem', '1.5rem', '2rem', '2.5rem', '3rem', '4rem', '8rem', '16rem', '32rem'],
  radii: [0, 2, 4, 16, 9999, '100%'],

  fontSizes: FONT_SIZES,
  lineHeights: LINE_HEIGHTS,

  breakpoints: BREAKPOINTS,

  colors: COLORS,

  fonts: {
    adelle: 'adelle-sans, sans-serif',
    freight: 'freight-sans-pro, sans-serif',
    body: 'adelle-sans, sans-serif',
    heading: 'freight-sans-pro, sans-serif',
  },
  fontWeights: {
    light: 300,
    book: 400,
    bold: 700,
    black: 900,

    // Aliases.
    body: 400,
    heading: 700,
  },

  text: {
    smallCaps: {
      fontVariantCaps: 'all-small-caps',
    },

    // ...
    hero: {
      variant: 'styles.h1',
      fontWeight: 'black',
    },
    subheader: {
      color: 'muted.lightbluegrey',
      fontStyle: 'italic',
    },

    // ...
    counter: {
      variant: 'text.smallCaps',
      color: 'muted.lightbluegrey',
    },
    date: {
      variant: 'text.smallCaps',
      color: 'main.avagreen',
    },
  },
  links: {
    title: {
      color: 'white',
      textDecoration: 'none',
    },
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
  },

  styles: {
    root: {
      background: 'linear-gradient(#1a1f23, #05070d 640px) no-repeat',
      color: '#ecf3f9',
      fontFamily: 'body',
      fontSize: 2,
      lineHeight: 2,
    },

    h1: {
      ...TEXT_MEGA,
      fontFamily: 'freight',

      '& a, & a:visited': {
        color: 'inherit',
      },
    },
    h2: {
      ...TEXT_HUGE,
      fontFamily: 'freight',

      '& a, & a:visited': {
        color: 'inherit',
      },
    },

    blockquote: {
      ...TEXT_LARGE,
      color: 'muted.green',
      fontFamily: 'freight',
      mb: baselineMultiple(1.25),
    },
    p: {
      mt: 0,
      mb: baselineMultiple(1),
    },

    a: {
      borderBottom: '1px solid',
      borderColor: 'main.avablue',
      color: 'inherit',
      textDecoration: 'none',
      transition: 'all 250ms ease',
      ':hover': {
        color: 'main.avablue',
        textDecoration: 'none',
      },
    },
    strong: {
      fontWeight: 'bold',
    },
    em: {
      fontStyle: 'italic',
    },
  },

  layout: {
    container: {
      maxWidth: [480, 720, 960, 1440],
      mx: 'auto',
    },
    wrapper: {
      maxWidth: [480, 720, 960, 1440],
      mx: 'auto',
      px: [4, null, 8, 9],
    },
    entry: {
      maxWidth: [480, 720, 960],
    },
  },

  shadows: {
    box: 'inset 0 0 0 1px #fff',
    card: {
      xs: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      sm: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      md: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      lg: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
      xl: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    },
  },

  structure: {
    caption: {
      borderBottom: '1px solid',
      borderColor: alpha('muted.bluegrey', 0.2),
      color: 'muted.bluegrey',
      fontSize: 0,
      p: 2,
      textAlign: 'right',
    },
  },

  components: {
    // Navigation-specific elements.
    navigation: {
      a: {
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
    },

    // Footer-specific elements.
    footer: {
      // Footer social links.
      a: {
        border: 'none',
        color: 'main.avablue',
        fontSize: 1,
        fontWeight: 'bold',
        textDecoration: 'none',
        span: {
          display: ['none', 'inline'],
          pl: 2,
        },
        svg: {
          verticalAlign: 'middle',
        },
      },
    },
  },

  pages: {
    projects: {
      dl: {
        fontSize: 1,
        m: 0,
        mb: 4,
      },
      dt: {
        variant: 'text.smallCaps',
        color: 'main.avayellow',
      },
      dd: {
        m: 0,

        '& + dt': { mt: 2 },
      },
    },
  },
}
