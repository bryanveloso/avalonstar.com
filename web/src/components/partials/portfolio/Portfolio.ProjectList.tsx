/** @jsx jsx */
import Img from 'gatsby-image'
import { jsx, AspectRatio, Box, Grid, Link, Text, Heading } from 'theme-ui'
import { useResponsiveValue } from '@theme-ui/match-media'

import { PortableText } from '@/components'
import { useProjectData } from '@/hooks'

const ProjectList = () => {
  const data = useProjectData()
  const ratio = useResponsiveValue([36 / 9])
  return (
    <Grid as="section" gap={4} sx={{ mb: 8 }} variant="pages.projects">
      {data.map(({ node }) => {
        const { _rawInvolvement, _rawSummary, announcementUrl, date, name, id, image, position, projectUrl } = node
        return (
          <Box sx={{ borderBottom: '1px solid', borderColor: 'highlight' }}>
            <Heading as="h2" variant="styles.h3" sx={{ mb: 2 }}>
              {name}
            </Heading>
            {image && image.asset && (
              <Box
                sx={{
                  position: 'relative',
                  backgroundColor: 'muted.dark',
                  borderRadius: 2,
                  boxShadow: 'card.lg',
                  mb: 4,
                  zIndex: '100',
                }}
              >
                <AspectRatio ratio={ratio}>
                  <Img
                    fluid={image.asset.fluid}
                    alt={image.alt}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: 2,
                    }}
                  />
                </AspectRatio>
              </Box>
            )}
            <Grid gap={4} columns={['7rem 1fr']} key={id}>
              <Box>
                <dl sx={{ lineHeight: 3 }}>
                  <dt>Company</dt>
                  <dd>{position.company}</dd>
                  <dt>Ship Date</dt>
                  <dd>{date}</dd>
                  {(projectUrl || announcementUrl) && <dt>Links</dt>}
                  {projectUrl && (
                    <dd>
                      <Link href={projectUrl}>Project</Link>
                    </dd>
                  )}
                  {announcementUrl && (
                    <dd>
                      <Link href={announcementUrl}>Announcement</Link>
                    </dd>
                  )}
                </dl>
              </Box>
              <Box sx={{ mb: 4 }}>
                {_rawSummary && (
                  <Box>
                    <Text variant="text.smallCaps" sx={{ color: 'main.avagreen', fontSize: 1 }}>
                      Summary
                    </Text>
                    <PortableText blocks={_rawSummary} />
                  </Box>
                )}
                {_rawInvolvement && (
                  <Box>
                    <Text variant="text.smallCaps" sx={{ color: 'main.avagreen', fontSize: 1 }}>
                      My Involment
                    </Text>
                    <PortableText blocks={_rawInvolvement} />
                  </Box>
                )}
              </Box>
            </Grid>
          </Box>
        )
      })}
    </Grid>
  )
}

export default ProjectList
