/** @jsx jsx */
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import numeral from 'numeral'
import { jsx, AspectRatio, Box, Flex, Heading, Text } from 'theme-ui'
import { useResponsiveValue } from '@theme-ui/match-media'

import { useEntryData } from '@/hooks'
import { getBlogUrl } from '@/lib/helpers'

const EntryList = () => {
  const data = useEntryData()
  const ratio = useResponsiveValue([36 / 9, 52 / 9])
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Heading as="h2" sx={{ lineHeight: [4] }}>
          Things I&lsquo;ve <span sx={{ color: 'main.avagreen' }}>written.</span>
        </Heading>
        <Text variant="subheader">Words on pages. Thoughts noted in stages.</Text>
      </Box>
      <Box as="section">
        {data.map(({ node }, index: number) => {
          const { coverImage, id, number, publishedAt, slug, title } = node
          return (
            <Box key={id}>
              {index === 0 && (
                <Box
                  sx={{
                    position: 'relative',
                    backgroundColor: 'muted.dark',
                    borderRadius: 2,
                    boxShadow: 'card.lg',
                    zIndex: '100',
                  }}
                >
                  <Link to={getBlogUrl(publishedAt, slug.current)}>
                    <AspectRatio ratio={ratio}>
                      {coverImage && coverImage.asset && (
                        <Img
                          fluid={coverImage.asset.fluid}
                          alt={coverImage.alt}
                          sx={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 2 }}
                        />
                      )}
                    </AspectRatio>
                  </Link>
                </Box>
              )}
              <Flex py={3} sx={{ alignItems: 'baseline', borderBottom: '1px solid', borderColor: 'gradient.darker' }}>
                <Box>
                  <Text variant="counter">{number > 0 ? numeral(number).format('000') : '000'}</Text>
                </Box>
                <Box sx={{ flex: '1', px: 4 }}>
                  <Heading
                    sx={{
                      fontFamily: 'body',
                      fontSize: [2, null, 3],
                      lineHeight: [4],
                    }}
                  >
                    <Link to={getBlogUrl(publishedAt, slug.current)} sx={{ variant: 'links.title' }}>
                      {title}
                    </Link>
                    <span sx={{ color: 'main.avagreen' }}>.</span>
                  </Heading>
                </Box>
                <Text as="time" variant="date">
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
