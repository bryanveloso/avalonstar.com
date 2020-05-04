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
        const { coverImage, id, isFeatured, number, publishedAt, slug, title } = node
        return (
          <Grid
            columns={['auto 1fr auto']}
            key={id}
            sx={{
              alignItems: 'baseline',
              borderBottom: '1px solid',
              borderColor: 'gradient.lighter',
              pb: 4,
              pt: 3,
            }}
          >
            <Box>
              {number > 0 && (
                <Text sx={{ color: 'muted.lightbluegrey' }}>{numeral(number).format('000')}</Text>
              )}
            </Box>
            <Box>
              <Heading>
                <Link
                  to={getBlogUrl(publishedAt, slug.current)}
                  sx={{ variant: 'styles.a', color: 'white' }}
                >
                  {title}
                  <span sx={{ color: 'main.avagreen' }}>.</span>
                </Link>
              </Heading>
              <Text variant="date">{format(parseISO(publishedAt), 'MMMM d, yyyy')}</Text>
            </Box>
            {/* {isFeatured && <Styled.p>{excerpt}</Styled.p>} */}
          </Grid>
        )
      })}
    </Box>
  )
}

export default EntryList
