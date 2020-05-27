/** @jsx jsx */
import { jsx, Box, Link, Text } from 'theme-ui'

import { useQuoteData } from '@/hooks'

const QuoteList = () => {
  const data = useQuoteData()
  return (
    <Box>
      {data.map(({ node }) => {
        const { body, handle, name } = node
        return (
          <Box key={handle} sx={{ mb: 3 }}>
            <Text
              sx={{
                color: 'muted.lightbluegrey',
                fontFamily: 'freight',
                fontSize: [2, null, 3],
                lineHeight: [4, 3],
                pb: 1,
              }}
            >
              &ldquo;{body}&rdquo;
            </Text>
            <cite sx={{ display: 'block', fontSize: 1 }}>
              &mdash;{name}, <Link href={`https://twitter.com/${handle}`}>{handle}</Link>
            </cite>
          </Box>
        )
      })}
    </Box>
  )
}

export default QuoteList
