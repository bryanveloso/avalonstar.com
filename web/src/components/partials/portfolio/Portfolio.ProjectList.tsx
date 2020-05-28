/** @jsx jsx */
import { Fragment } from 'react'
import { jsx, Box, Grid, Link, Text, Heading } from 'theme-ui'
import { alpha } from '@theme-ui/color'

import { PortableText } from '@/components'
import { useProjectData } from '@/hooks'

const ProjectList = () => {
  const data = useProjectData()
  return (
    <Grid as="section" gap={4} sx={{ mb: 8 }} variant="pages.projects">
      {data.map(({ node }) => {
        const { _rawSummary, announcementUrl, date, name, id, position, projectUrl } = node
        return (
          <Box sx={{ borderBottom: '1px solid', borderColor: 'highlight' }}>
            <Heading as="h2" variant="styles.h3" sx={{ mb: 2 }}>
              {name}
            </Heading>
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
              <Grid>{_rawSummary && <PortableText blocks={_rawSummary} />}</Grid>
            </Grid>
          </Box>
        )
      })}
    </Grid>
  )
}

export default ProjectList
