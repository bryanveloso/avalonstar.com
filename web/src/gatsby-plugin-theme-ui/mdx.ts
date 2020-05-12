export const styles = {
  root: {
    fontFamily: 'body',
    fontWeight: 'book',
    backgroundColor: 'gradient.darker',
    backgroundImage: 'linear-gradient(#1a1f23, #0d0a11 640px)',
    backgroundRepeat: 'no-repeat',
  },

  // Headings.
  h1: {
    variant: 'text.heading',
    fontSize: [6, 9, 10, null],
    lineHeight: ['2.5rem', '3.5rem', '4rem', null],
  },
  h2: {
    variant: 'text.heading',
    fontSize: [5, 8, 9, null],
    fontWeight: 'black',
    lineHeight: [1, 3, 4, null],
    textTransform: 'uppercase',
  },
  h3: {
    variant: 'text.heading',
    fontWeight: 'black',
    fontSize: [4, 7, 8, null],
    fontVariantNumeric: 'lining-nums',
    lineHeight: [1, 2, 3, null],
  },
  h4: {
    variant: 'text.heading',
    fontSize: [3, 5, 7, null],
    lineHeight: ['1.5rem', '2rem', '2.5rem', null],
  },
  h5: {
    variant: 'text.heading',
    fontSize: [3],
    lineHeight: ['1.5rem'],
    textTransform: 'uppercase',
  },

  // Links.
  a: {
    borderBottom: '2px solid',
    borderColor: 'main.avablue',
    color: 'inherit',
    textDecoration: 'none',
    transition: 'all 250ms ease',
    ':hover': {
      color: 'main.avablue',
      textDecoration: 'none',
    },
  },

  // Other blocks.
  blockquote: {
    color: 'muted.green',
    fontSize: [4],
    fontFamily: 'freight',
    lineHeight: ['2rem'],
  },
  hr: {
    border: 0,
    borderBottom: '1px solid',
  },
  img: {
    maxWidth: '100%',
  },
  li: {
    fontSize: [1, null, 2, null],
    lineHeight: [0, null, 1, null],
    pl: 2,
  },
  p: {
    fontSize: [1, 2],
    lineHeight: [0, 1],
    mb: 3,
  },
  strong: {
    color: 'white',
  },
  ul: {
    mb: 4,
  },
}
