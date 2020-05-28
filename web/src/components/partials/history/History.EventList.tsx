/** @jsx jsx */
import Img from 'gatsby-image'
import groupBy from 'lodash/groupBy'
import { Fragment } from 'react'
import { jsx, AspectRatio, Box, Flex, Grid, Heading, Text } from 'theme-ui'

import { PortableText } from '@/components'
import { useEventData } from '@/hooks'
import BrowserPageAccount from '@/images/browser-page-account.svg'
import SingleNeutralFocus from '@/images/single-neutral-focus.svg'
import StartupLaunch from '@/images/startup-launch.svg'

const getEventIcon = (height = '1.5rem') => ({
  company: <StartupLaunch sx={{ height }} />,
  person: <SingleNeutralFocus sx={{ height }} />,
  website: <BrowserPageAccount sx={{ height }} />,
})

const getSubjectColor = () => ({
  company: 'main.avayellow',
  person: 'muted.lightbluegrey',
  website: 'main.avagreen',
})

const Event = ({ _rawBody, coverImage, date, name, subject }) => {
  return (
    <Fragment>
      <Flex sx={{ color: getSubjectColor()[subject], gridColumn: '1', fontSize: 0 }}>
        {getEventIcon()[subject]}
        <Text variant="smallCaps" sx={{ display: ['none', 'block'], pl: 2 }}>
          The {subject}
        </Text>
      </Flex>
      <Grid gap={2} color="white" columns={['auto']} sx={{ fontSize: 1, gridColumn: '2', pl: 4, mb: 6 }}>
        {coverImage && (
          <Box sx={{ boxShadow: 'card.xl', mb: 2 }}>
            <AspectRatio ratio={16 / 9}>
              <Img
                fluid={coverImage.asset.fluid}
                alt={coverImage.alt}
                sx={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 2 }}
              />
            </AspectRatio>
          </Box>
        )}
        <Box>
          <Text sx={{ fontFamily: 'freight', fontSize: 4, lineHeight: 4, fontWeight: 'bold' }}>{name}.</Text>
          <Text variant="date" sx={{ fontSize: 2, mb: 2 }}>
            {date}
          </Text>
          {_rawBody && <PortableText blocks={_rawBody} />}
        </Box>
      </Grid>
    </Fragment>
  )
}

const Section = ({ data, year }) => {
  return (
    <Fragment>
      <Heading sx={{ color: 'main.avablue', gridColumn: 1, pb: 2 }}>{year}</Heading>
      {data.map((node) => (
        <Event key={node.id} {...node} />
      ))}
    </Fragment>
  )
}

const EventList = () => {
  const data = useEventData()
  const dataByYear = groupBy(data, ({ date }) => date.substr(date.length - 4))

  return (
    <Grid gap={0} columns={['2rem auto', '7rem auto']} as="section" sx={{ position: 'relative' }}>
      {Object.keys(dataByYear).map((key) => (
        <Section key={key} year={key} data={dataByYear[key]} />
      ))}
    </Grid>
  )
}

export default EventList
