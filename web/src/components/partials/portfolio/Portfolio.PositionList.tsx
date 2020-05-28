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
  <Box sx={{ fontSize: 0 }}>
    <Text variant="text.smallCaps" sx={{ color: 'main.avayellow', fontSize: 1 }}>
      Projects
    </Text>
    <Box>
      {projects.map((project) => {
        const { announcementUrl, date, name } = project
        return announcementUrl ? (
          <div>
            <Link href={announcementUrl} key={name}>
              {name}
            </Link>
          </div>
        ) : (
          <div>
            <Text key={name}>{name}</Text>
          </div>
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
          <Card key={id}>
            <Box mb={2}>{getLogo()[slug.current]}</Box>
            <Box sx={{ lineHeight: 3 }}>
              <Text variant="date">{date}</Text>
              <Heading sx={{ mb: 3 }}>
                {company}&rsquo;s {title}
              </Heading>
            </Box>
            <Grid columns={['1fr 7rem']}>
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
