/** @jsx jsx */
import { jsx, Box, Card, Grid, Link, Text, Heading } from 'theme-ui'

import { PortableText } from '@/components'
import { useProjectData } from '@/hooks'

const ComponentName = () => {
  const data = useProjectData()
  return (
    <Grid as="section" sx={{ mb: 6 }}>
      {data.map(({ node }) => {
        const { _rawSummary, announcementUrl, date, name, id, position, projectUrl } = node
        return (
          <Card key={id}>
            <Text variant="date">{date}</Text>
            <Heading sx={{}}>{name}</Heading>
            for {position.company}
            <Grid>{_rawSummary && <PortableText blocks={_rawSummary} />}</Grid>
          </Card>
        )
      })}
    </Grid>
  )
}

export default ComponentName
