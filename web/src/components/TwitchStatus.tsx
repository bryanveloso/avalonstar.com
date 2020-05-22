/* eslint-disable no-console */
/** @jsx jsx */
import useAxios from 'axios-hooks'
import { jsx, Box, Flex, Link } from 'theme-ui'

import External from '@/images/external.svg'
import Twitch from '@/images/icon-twitch.svg'

const TwitchStatus = () => {
  const [{ data, loading }] = useAxios({
    url: 'https://api.twitch.tv/helix/streams?user_login=avalonstar',
    headers: {
      'Client-ID': process.env.TWITCH_CLIENT_ID,
      Authorization: `Bearer ${process.env.TWITCH_OAUTH_TOKEN}`,
    },
  })

  return (
    <Box sx={{ backgroundColor: 'muted.dark', display: !loading && data !== [] ? 'none' : 'block' }}>
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
  )
}

export default TwitchStatus
