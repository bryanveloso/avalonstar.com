/** @jsx jsx */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-pascal-case */

import { useStaticQuery, graphql, Link } from 'gatsby'
import { jsx, Box, Container, Grid, Styled } from 'theme-ui'

import { SEO } from '@/components'
import { EntryList, QuoteList, Company } from '@/components/partials/home'

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
      <Container>
        <EntryList />
        <Company />
        <Grid gap={4} as="section" columns={[1, 2]} sx={{ mt: 4 }}>
          <Box sx={{ fontSize: 1, mb: 4 }}>
            <Styled.p>
              Hello, my name is Bryan Veloso and I&apos;ve been around the web for a bit. Since I bought this domain in
              2000, Avalonstar has been one of the longest-running constants in my life. It has managed to change in
              both form and function as much as I have, going from personal site, to blog, to online moniker, to company
              namesake, and back again.
            </Styled.p>
            <Styled.p>
              Avalonstar is an extension of me: the designer, the developer, the gamer, the content creator, the
              entrepreneur, and whatever else the next 20 or so years have to offer.
            </Styled.p>
            <Link
              to="/history/"
              sx={{
                variant: 'links.button',
                backgroundColor: 'main.avablue',
                color: 'main.dark',
              }}
            >
              Take a look back
            </Link>
          </Box>
          <QuoteList />
        </Grid>
      </Container>
    </Box>
  )
}

const IndexPage = () => <IndexPageTemplate />

export default IndexPage
