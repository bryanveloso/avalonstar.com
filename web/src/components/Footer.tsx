/** @jsx jsx */
import {
 jsx, Box, Flex, Grid, Link,
} from 'theme-ui'
import { useAuthorData, useSiteSettings } from '@/hooks'

const Footer = () => {
  const author = useAuthorData()
  const { title } = useSiteSettings()
  return (
    <footer sx={{ bg: 'muted.dark' }}>
      <Grid
        gap={0}
        sx={{
          variant: 'layout.container',
          px: 4,
          py: 6,
        }}
      >
        <Box>...</Box>
        <Box>Designing bold and writing code for ## years.</Box>
        <Flex>
          <Box>
            <Flex as="ul">
              <Link href={author.facebook}>Facebook</Link>
              <Link href={author.github}>GitHub</Link>
              <Link href={author.instagram}>Instagram</Link>
              <Link href={author.twitch}>Twitch</Link>
              <Link href={author.twitter}>Twitter</Link>
              <Link href={author.youtube}>YouTube</Link>
            </Flex>
          </Box>
        </Flex>
        <Box>
          © 2000–{new Date().getFullYear()} {title} <em>Remember the ;</em>
        </Box>
      </Grid>
    </footer>
  )
}
export default Footer
