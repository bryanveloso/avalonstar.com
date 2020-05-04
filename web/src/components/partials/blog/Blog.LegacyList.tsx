/** @jsx jsx */
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import { Link } from 'gatsby'
import { jsx, Box, Heading, Text, Grid } from 'theme-ui'

import { useLegacyData } from '@/hooks'

const LegacyList = () => {
  const data = useLegacyData()
  return (
    <Box
      as="section"
      sx={{
        borderTop: '2px solid',
        borderColor: 'gradient.lighter',
      }}
    >
      {data.map(({ node }) => {
        const {
          id,
          fields: { slug },
          frontmatter: { date, title },
        } = node
        return (
          <Grid
            columns={['auto', '1fr auto']}
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
              <Heading as="h3">
                <Link to={slug} sx={{ variant: 'styles.a', color: 'white' }}>
                  {title}
                  <span sx={{ color: 'main.avagreen' }}>.</span>
                </Link>
              </Heading>
            </Box>
            <Box>
              <Text variant="date">{format(parseISO(date), 'MMMM d, yyyy')}</Text>
            </Box>
          </Grid>
        )
      })}
    </Box>
  )
}

export default LegacyList
