/** @jsx jsx */
import differenceInYears from 'date-fns/differenceInYears'
import { jsx, Box, Grid, Link } from 'theme-ui'

import { useAuthorData, useSiteSettings } from '@/hooks'

import Avalonstar from '@/images/avalonstar.png'
import Facebook from '@/images/icon-facebook.svg'
import GitHub from '@/images/icon-github.svg'
import Instagram from '@/images/icon-instagram.svg'
import Twitch from '@/images/icon-twitch.svg'
import Twitter from '@/images/icon-twitter.svg'
import YouTube from '@/images/icon-youtube.svg'

const height = 24

const Footer = () => {
  const author = useAuthorData()
  const { title } = useSiteSettings()

  return (
    <footer>
      <Grid
        sx={{
          variant: 'layout.container',
          py: 6,
        }}
      >
        <Grid columns={['auto', 'auto 1fr']} sx={{ pt: 6, borderTop: '1px solid', borderColor: 'muted.bluegrey' }}>
          <Box>
            <img src={Avalonstar} alt="logo" sx={{ height: 48 }} />
          </Box>
          <Grid gap={6} columns={['auto', '1fr 1fr']}>
            <Box sx={{ color: 'muted.lightbluegrey', fontSize: 1, lineHeight: '1.5rem' }}>
              <strong sx={{ color: 'white' }}>Avalonstar</strong> is the{' '}
              {differenceInYears(new Date(), new Date(2000, 9, 28))}
              -year-old personal website of Bryan Veloso: <em>content creator</em>,{' '}
              <em>retired professional user interface designer</em>, and <em>compass of purpose</em>.
            </Box>
            <Grid gap={2} columns={[6, 2, 3]} sx={{ justifyContent: 'space-between' }}>
              <Box>
                <Link variant="socials" href={author.facebook}>
                  <Facebook sx={{ height }} />
                  <span>Facebook</span>
                </Link>
              </Box>
              <Box>
                <Link variant="socials" href={author.github}>
                  <GitHub sx={{ height }} />
                  <span>GitHub</span>
                </Link>
              </Box>
              <Box>
                <Link variant="socials" href={author.instagram}>
                  <Instagram sx={{ height }} />
                  <span>Instagram</span>
                </Link>
              </Box>
              <Box>
                <Link variant="socials" href={author.twitch}>
                  <Twitch sx={{ height }} />
                  <span>Twitch</span>
                </Link>
              </Box>
              <Box>
                <Link variant="socials" href={author.twitter}>
                  <Twitter sx={{ height }} />
                  <span>Twitter</span>
                </Link>
              </Box>
              <Box>
                <Link variant="socials" href={author.youtube}>
                  <YouTube sx={{ height }} />
                  <span>YouTube</span>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        gap={0}
        columns={['auto', 'auto auto']}
        sx={{ py: 4, color: 'muted.bluegrey', fontSize: 1, justifyContent: 'space-between' }}
      >
        <Box>
          © 2000–{new Date().getFullYear()} {title}. All rights reserved.
        </Box>
        <Box>
          <em>Remember the ;</em>
        </Box>
      </Grid>
    </footer>
  )
}
export default Footer
