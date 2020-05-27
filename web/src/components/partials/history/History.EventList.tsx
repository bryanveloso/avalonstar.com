/** @jsx jsx */
import Img from 'gatsby-image'
import groupBy from 'lodash/groupBy'
import { Fragment } from 'react'
import { jsx, AspectRatio, Box, Text, Grid, Heading } from 'theme-ui'

import { PortableText } from '@/components'
import { useEventData } from '@/hooks'
import BrowserPageAccount from '@/images/browser-page-account.svg'
import SingleNeutralFocus from '@/images/single-neutral-focus.svg'
import StartupLaunch from '@/images/startup-launch.svg'

const getEventIcon = () => ({
  company: <StartupLaunch sx={{ color: 'main.avayellow' }} />,
  person: <SingleNeutralFocus sx={{ color: 'muted.lightbluegrey' }} />,
  website: <BrowserPageAccount sx={{ color: 'main.avagreen' }} />,
})

const getHeaderColor = () => ({
  company: 'white',
  person: 'muted.lightbluegrey',
  website: 'white',
})

const Event = (props) => {
  const { _rawBody, coverImage, date, name, subject } = props
  return (
    <Fragment>
      <Box sx={{ gridColumn: '1' }}>{getEventIcon()[subject]}</Box>
      <Grid
        gap={2}
        color={getHeaderColor()[subject]}
        columns={['auto']}
        sx={{ fontSize: 1, gridColumn: '2', pl: 4, mb: 6 }}
      >
        {coverImage && (
          <Box sx={{ mb: 2 }}>
            <AspectRatio ratio={16 / 9} sx={{ objectFit: 'cover', width: '100%', height: '100%' }}>
              <Img
                fluid={coverImage.asset.fluid}
                alt={coverImage.alt}
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
        <Box>
          <Text
            variant="date"
            sx={{
              color: 'main.avayellow',
              fontWeight: 'book',
              lineHeight: 4,
              textTransform: 'uppercase',
            }}
          >
            {date}
          </Text>
          <Text
            sx={{
              fontFamily: 'freight',
              fontSize: 4,
              lineHeight: 4,
              fontWeight: 'bold',
              mb: 2,
            }}
          >
            {name}.
          </Text>
          {_rawBody && <PortableText blocks={_rawBody} />}
        </Box>
      </Grid>
    </Fragment>
  )
}

const Section = (props) => {
  const { data, year } = props
  return (
    <Fragment>
      <Heading
        sx={{
          color: 'main.avablue',
          gridColumn: 1,
          pt: 3,
          pb: 3,
        }}
      >
        {year}
      </Heading>
      {data.map((node) => (
        <Event key={node.id} {...node} />
      ))}
    </Fragment>
  )
}

const EventList = () => {
  const data = useEventData()
  const dataByYear = groupBy(data, (datum) => datum.date.substr(datum.date.length - 4))

  return (
    <Grid gap={0} columns={['24px auto']} as="section" sx={{ position: 'relative' }}>
      {Object.keys(dataByYear).map((key) => (
        <Section key={key} year={key} data={dataByYear[key]} />
      ))}
    </Grid>
  )
}

export default EventList
