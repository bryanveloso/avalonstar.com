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
          <Box key={handle} sx={{ pt: 3 }}>
            <Text variant="text.quote">&ldquo;{body}&rdquo;</Text>
            <cite sx={{ display: 'block' }}>
              &mdash;{name}, <Link href={`https://twitter.com/${handle}`}>{handle}</Link>
            </cite>
          </Box>
        )
      })}
    </Box>
  )
}

export default QuoteList
