/** @jsx jsx */
import Img from 'gatsby-image'
import _ from 'lodash'
import { Fragment } from 'react'
import { jsx, AspectRatio, Box, Text, Grid, Heading } from 'theme-ui'

import { PortableText } from '@/components'
import { useEventData } from '@/hooks'
import BrowserPageAccount from '@/images/browser-page-account.svg'
import SingleNeutralFocus from '@/images/single-neutral-focus.svg'
import StartupLaunch from '@/images/startup-launch.svg'

const CompanyEvent = props => {
  const { _rawBody, date, name } = props
  return (
    <Fragment>
      <Box sx={{ gridColumn: '1' }}>
        <StartupLaunch sx={{ color: 'main.avayellow' }} />
      </Box>
      <Box sx={{ gridColumn: '2', pl: 4, pb: 4 }}>
        <Text variant="history.date">{date}</Text>
        <Text variant="history.title">{name}.</Text>
        {_rawBody && <PortableText blocks={_rawBody} />}
      </Box>
    </Fragment>
  )
}

const PersonEvent = props => {
  const { _rawBody, coverImage, date, name } = props
  return (
    <Fragment>
      <Box sx={{ gridColumn: '1' }}>
        <SingleNeutralFocus sx={{ color: 'muted.lightbluegrey' }} />
      </Box>
      <Box color="muted.lightbluegrey" sx={{ fontSize: 1, gridColumn: '2', pl: 4, pb: 4 }}>
        {coverImage && (
          <Box
            sx={{
              borderColor: 'muted.lightbluegrey',
              borderTop: '1px solid',
              mb: 2,
              pt: 1,
            }}
          >
            <AspectRatio ratio={16 / 9} sx={{ objectFit: 'cover', width: '100%', height: '100%' }}>
              <Img fluid={coverImage.asset.fluid} alt={coverImage.alt} />
            </AspectRatio>
          </Box>
        )}
        <Text variant="history.date">{date}</Text>
        <Text variant="history.title">{name}.</Text>
        {_rawBody && <PortableText blocks={_rawBody} />}
      </Box>
    </Fragment>
  )
}

const WebsiteEvent = props => {
  const { _rawBody, date, name } = props
  return (
    <Fragment>
      <Box sx={{ gridColumn: '1' }}>
        <BrowserPageAccount sx={{ color: 'main.avagreen' }} />
      </Box>
      <Box sx={{ gridColumn: '2', pl: 4, pb: 4 }}>
        <Text variant="history.date">{date}</Text>
        <Text variant="history.title">{name}.</Text>
        {_rawBody && <PortableText blocks={_rawBody} />}
      </Box>
    </Fragment>
  )
}

const getEventDisplay = ({ id, ...rest }) => ({
  company: <CompanyEvent key={id} {...rest} />,
  person: <PersonEvent key={id} {...rest} />,
  website: <WebsiteEvent key={id} {...rest} />,
})

const Section = props => {
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
      {data.map(node => getEventDisplay(node)[node.subject])}
    </Fragment>
  )
}

const EventList = () => {
  const data = useEventData()
  const dataByYear = _.groupBy(data, datum => datum.date.substr(datum.date.length - 4))

  return (
    <Grid gap={0} columns={['24px auto']} as="section" sx={{ position: 'relative' }}>
      {Object.keys(dataByYear).map(key => (
        <Section key={key} year={key} data={dataByYear[key]} />
      ))}
    </Grid>
  )
}

export default EventList
