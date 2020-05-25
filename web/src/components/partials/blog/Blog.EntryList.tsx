/** @jsx jsx */
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import { Link } from 'gatsby'
import numeral from 'numeral'
import { jsx, Box, Heading, Text, Grid } from 'theme-ui'

import { useEntryData } from '@/hooks'
import { getBlogUrl } from '@/lib/helpers'

const EntryList = () => {
  const data = useEntryData()
  return (
    <Box
      as="section"
      sx={{
        borderTop: '2px solid',
        borderColor: 'gradient.lighter',
      }}
    >
      {data.map(({ node }) => {
        const { coverImage, id, number, publishedAt, readingTimeInMinutes, slug, title } = node
        return (
          <Grid
            columns={['auto 1fr']}
            key={id}
            sx={{
              alignItems: 'baseline',
              borderBottom: '1px solid',
              borderColor: 'gradient.lighter',
              py: 4,
              '&:last-of-type': { borderBottomWidth: '2px' },
            }}
          >
            <Box>
              {number > 0 && <Text sx={{ color: 'muted.lightbluegrey' }}>{numeral(number).format('000')}</Text>}
            </Box>
            <Box>
              <Heading sx={{ lineHeight: '1.5rem' }}>
                <Link to={getBlogUrl(publishedAt, slug.current)} sx={{ variant: 'links.header' }}>
                  {title}
                  <span sx={{ color: 'main.avagreen' }}>.</span>
                </Link>
              </Heading>
              <Text variant="date" sx={{ pt: 1 }}>
                {format(parseISO(publishedAt), 'MMMM d, yyyy')}
              </Text>
            </Box>
          </Grid>
        )
      })}
    </Box>
  )
}

export default EntryList
