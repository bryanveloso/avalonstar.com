/** @jsx jsx */
/* eslint-disable no-underscore-dangle */

import { useStaticQuery, graphql, Link } from 'gatsby'
import { jsx, Box, Container, Grid } from 'theme-ui'

import { SEO } from '@/components'
import { EntryList, QuoteList } from '@/components/partials/home'
import { Layout } from '@/containers'

const QUERY = graphql`
  query {
    sanityRoute(slug: { current: { eq: "/" } }) {
      title
    }
  }
`

export const IndexPageTemplate = () => {
  const {
    sanityRoute: { title },
  } = useStaticQuery(QUERY)

  return (
    <Box as="section">
      <SEO title={title} />
      <Container sx={{ p: 4 }}>
        <EntryList />
        <Grid as="section" columns={[1, null, 2]} sx={{ mt: 4 }}>
          <Box sx={{ fontSize: 1, lineHeight: ['1.5rem'] }}>
            <p>
              Hello, my name is Bryan Veloso and I've been around the web for a bit. Since I bought
              this domain in 2000, Avalonstar has been one of the longest-running constants in my
              life. It has managed to change in both form and function as much as I have, going from
              personal site, to blog, to online moniker, to company namesake, and back again.
            </p>
            <p>
              Avalonstar is an extension of me: the designer, the developer, the gamer, the content
              creator, the entrepreneur, and whatever else the next 20 or so years have to offer.
            </p>
            <p>
              <Link to="/history/" sx={{ variant: 'links.primaryButton' }}>
                Take a look back
              </Link>
            </p>
          </Box>
          <QuoteList />
        </Grid>
      </Container>
    </Box>
  )
}

const IndexPage = () => (
  <Layout>
    <IndexPageTemplate />
  </Layout>
)

export default IndexPage
