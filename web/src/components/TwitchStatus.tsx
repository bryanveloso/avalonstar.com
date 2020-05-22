/* eslint-disable no-console */
/** @jsx jsx */
import useAxios from 'axios-hooks'
import { jsx, Box, Flex, Link } from 'theme-ui'

import External from '@/images/external.svg'
import Twitch from '@/images/icon-twitch.svg'
import { Fragment } from 'react'

const TwitchStatus = () => {
  const [{ data, loading }] = useAxios({
    url: 'https://api.twitch.tv/helix/streams?user_login=avalonstar',
    headers: {
      'Client-ID': process.env.GATSBY_TWITCH_CLIENT_ID,
      Authorization: `Bearer ${process.env.GATSBY_TWITCH_OAUTH_TOKEN}`,
    },
  })

  return !loading && data.data.length ? (
    <Box sx={{ backgroundColor: 'muted.dark' }}>
      <Box py={3} sx={{ borderBottom: '1px solid', borderColor: 'gradient.lighter', fontSize: 0 }}>
        <Flex variant="layout.wrapper">
          <Box mr={2} sx={{ color: 'main.avapurple', height: '1rem' }}>
            <Twitch sx={{ height: '1rem' }} />
          </Box>
          <Box sx={{ color: 'main.avapurple', flex: '1 1 auto' }}>
            <strong>Currently Live!</strong>
          </Box>
          <Link href="https://twitch.tv/avalonstar" sx={{ border: 'none' }}>
            Come by and say hello! <External sx={{ height: '0.75rem', pl: 1 }} />
          </Link>
        </Flex>
      </Box>
    </Box>
  ) : (
    <Fragment />
  )
}

export default TwitchStatus
