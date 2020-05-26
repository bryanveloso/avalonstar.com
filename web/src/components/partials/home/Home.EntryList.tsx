/** @jsx jsx */
import { useResponsiveValue } from '@theme-ui/match-media'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import numeral from 'numeral'
import { jsx, AspectRatio, Box, Flex, Heading, Text } from 'theme-ui'

import { useEntryData } from '@/hooks'
import { getBlogUrl } from '@/lib/helpers'

const EntryList = () => {
  const data = useEntryData()
  const ratio = useResponsiveValue([36 / 9, 52 / 9])
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Heading as="h2">
          Things I&lsquo;ve <span sx={{ color: 'main.avagreen' }}>written.</span>
        </Heading>
        <Text variant="secondary">Words on pages. Thoughts noted in stages.</Text>
      </Box>
      <Box as="section">
        {data.map(({ node }, index: number) => {
          const { coverImage, id, number, publishedAt, slug, title } = node
          return (
            <Box key={id}>
              {index === 0 && (
                <Box sx={{ position: 'relative', boxShadow: 'card.lg', zIndex: '100' }}>
                  <Link to={getBlogUrl(publishedAt, slug.current)}>
                    <AspectRatio ratio={ratio}>
                      <Img
                        fluid={coverImage.asset.fluid}
                        alt={coverImage.alt}
                        sx={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 2 }}
                      />
                    </AspectRatio>
                  </Link>
                </Box>
              )}
              <Flex py={3} sx={{ alignItems: 'baseline', borderBottom: '1px solid', borderColor: 'gradient.darker' }}>
                <Box>
                  {number > 0 && (
                    <Text variant="counter" sx={{ color: 'muted.lightbluegrey' }}>
                      {numeral(number).format('000')}
                    </Text>
                  )}
                </Box>
                <Box sx={{ flex: '1', px: 4 }}>
                  <Heading sx={{ fontFamily: 'body', fontSize: [2, 2, 4, null] }}>
                    <Link
                      to={getBlogUrl(publishedAt, slug.current)}
                      sx={{ variant: 'styles.a', border: 'none', color: 'white' }}
                    >
                      {title}
                      <span sx={{ color: 'main.avagreen' }}>.</span>
                    </Link>
                  </Heading>
                </Box>
                <Text variant="date" sx={{ whiteSpace: 'nowrap' }}>
                  {format(parseISO(publishedAt), 'MMMM d, yyyy')}
                </Text>
              </Flex>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default EntryList
