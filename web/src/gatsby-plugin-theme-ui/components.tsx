/** @jsx jsx */
/* eslint-disable react/jsx-pascal-case */
import { jsx, Box, Flex, Styled } from 'theme-ui'

import OpenQuote from '@/images/open-quote.svg'

export default {
  blockquote: ({ children }) => (
    <Flex
      sx={{
        mx: 0,
        pb: 2,
      }}
    >
      <Box sx={{ my: '1em', minWidth: '1rem' }}>
        <OpenQuote sx={{ color: 'muted.lightgreen', height: '2.5rem' }} />
      </Box>
      <Styled.blockquote>{children}</Styled.blockquote>
    </Flex>
  ),
}
