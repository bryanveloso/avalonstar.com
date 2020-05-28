/** @jsx jsx */
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import { Link } from 'gatsby'
import groupBy from 'lodash/groupBy'
import Pluralize from 'react-pluralize'
import { jsx, Box, Heading, Text, Grid } from 'theme-ui'

import { useLegacyData } from '@/hooks'

const Section = (props) => {
  const { data, year } = props
  return (
    <Grid columns={['auto', 'auto 1fr']} mb={4}>
      <Box>
        <Heading sx={{ color: 'main.avayellow', mr: [0, 4] }}>{year}</Heading>
        <Text variant="text.smallCaps" sx={{ color: 'muted.yellow', position: 'relative', top: '-6px' }}>
          <Pluralize singular="entry" plural="entries" count={data.length} />
        </Text>
      </Box>
      <ul
        sx={{
          borderLeft: ['none', '1px solid'],
          borderLeftColor: ['none', 'gradient.darker'],
          listStyle: 'none',
          my: 1,
          p: 0,
          pl: [0, 4],
        }}
      >
        {data.map((node) => {
          const {
            fields: { slug },
            frontmatter: { title, date },
          } = node
          return (
            <li key={slug} sx={{ display: ['block', 'inline-block'], mb: 2, mr: 3 }}>
              <Link to={slug} sx={{ variant: 'styles.a', mr: 2 }}>
                {title}
              </Link>
              <Text
                sx={{
                  display: ['inline', 'block'],
                  color: 'muted.bluegrey',
                  fontSize: 0,
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {format(parse(date, 'MMMM dd, yyyy', new Date()), 'MM/dd')}
              </Text>
            </li>
          )
        })}
      </ul>
    </Grid>
  )
}

const LegacyList = () => {
  const data = useLegacyData()
  const dataByYear = groupBy(data, ({ frontmatter }) => frontmatter.date.substr(frontmatter.date.length - 4))

  return (
    <Box as="section" mt={6}>
      <Box mb={6}>
        <Heading as="h2">
          Legacy entries<span sx={{ color: 'main.avagreen' }}>.</span>
        </Heading>
        <Text variant="subheader" my={2}>
          The links that follow are a collection of <strong>legacy blog entries from 2004&ndash;2014</strong>, or{' '}
          <em>&ldquo;when I started blogging on this domain&rdquo;</em> to{' '}
          <em>&ldquo;when I got into streaming.&rdquo;</em> Although these posts have survived the numerous platform
          moves over years, there is no guarantee that they&apos;ve survived the trip unscathed (especially the links).
          They&apos;re presented in an as-is, <em>&ldquo;until I get tired of seeing it broken&rdquo;</em> state.
        </Text>
      </Box>
      {Object.keys(dataByYear)
        .reverse()
        .map((key) => (
          <Section key={key} year={key} data={dataByYear[key]} />
        ))}
    </Box>
  )
}

export default LegacyList
