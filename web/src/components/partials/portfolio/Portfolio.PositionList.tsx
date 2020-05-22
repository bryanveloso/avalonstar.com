/** @jsx jsx */
import { jsx, Box, Card, Grid, Link, Text, Heading } from 'theme-ui'

import { PortableText } from '@/components'
import { usePositionData } from '@/hooks'

import Avalonstar from '@/images/avalonstar.png'
import Automattic from '@/images/automattic.svg'
import Facebook from '@/images/facebook.svg'
import GitHub from '@/images/github.svg'
import Revyver from '@/images/revyver.svg'
import Twitch from '@/images/twitch.svg'

const getLogo = (height = '60px') => ({
  automattic: <Automattic sx={{ height }} />,
  avalonstar: <img src={Avalonstar} alt="avalonstar" sx={{ height }} />,
  facebook: <Facebook sx={{ height }} />,
  github: <GitHub sx={{ height }} />,
  revyver: <Revyver sx={{ height }} />,
  twitch: <Twitch sx={{ height }} />,
})

const ProjectList = ({ projects }) => (
  <Box sx={{ pt: 3, fontSize: 0 }}>
    <Heading
      variant="styles.h5"
      sx={{
        color: 'muted.lightbluegrey',
        mb: 0,
        pr: 4,
        lineHeight: 2.5,
      }}
    >
      Projects
    </Heading>
    <Box>
      {projects.map((project) => {
        const { announcementUrl, date, isActive, name, projectUrl } = project
        return projectUrl ? (
          <Link href={projectUrl} key={name} sx={{ display: 'block', opacity: isActive ? 1 : 0.5 }}>
            {name} {date}
          </Link>
        ) : (
          <Text key={name} sx={{ opacity: isActive ? 1 : 0.5 }}>
            {name} {date}
          </Text>
        )
      })}
    </Box>
  </Box>
)

const PositionList = () => {
  const data = usePositionData()
  return (
    <Grid as="section" gap={4} columns={[1, null, 2]}>
      {data.map(({ node }) => {
        const { _rawSummary, id, company, date, projects, slug, title } = node
        return (
          <Card key={id} variant="position">
            <Box pb={3}>{getLogo()[slug.current]}</Box>
            <Box>
              <Text variant="date">{date}</Text>
              <Heading sx={{}}>
                {company}&rsquo;s {title}
              </Heading>
            </Box>
            <Grid>
              {_rawSummary && <PortableText blocks={_rawSummary} />}
              {projects && <ProjectList projects={projects} />}
            </Grid>
          </Card>
        )
      })}
    </Grid>
  )
}

export default PositionList
