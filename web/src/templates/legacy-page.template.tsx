/** @jsx jsx */
import { format } from 'date-fns'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Fragment } from 'react'
import { jsx, Box, Heading, Text } from 'theme-ui'

import { SEO } from '@/components'

const Entry = (props) => {
  const {
    body,
    frontmatter: { date, title },
  } = props
  return (
    <Box as="article">
      <Box p={4} mb={6} sx={{ border: '2px solid', borderColor: 'main.avayellow', borderRadius: 2 }}>
        <Text sx={{ color: 'muted.yellow', fontSize: 1, lineHeight: '1.5rem' }}>
          The entry below is classified as a <strong sx={{ color: 'white' }}>LEGACY</strong> post, meaning that it was
          written (well) before the current version of Avalonstar was released. Although these posts have survived the
          numerous moves over years, there is no guarantee that they&apos;ve survived the trip unscathed (especially the
          links).
        </Text>
      </Box>
      <Box sx={{ my: [6, null, 7] }}>
        <Box sx={{ display: 'inline-flex', fontSize: 1 }}>
          <Text variant="counter">
            LEGACY
            <span sx={{ px: 2 }}>&ndash;</span>
          </Text>
          <Text as="time" variant="date">
            {format(new Date(date), 'MMMM dd, yyyy')}
          </Text>
        </Box>
        <Heading as="h1" variant="styles.h1">
          {title}
        </Heading>
      </Box>
      <Box
        sx={{
          'p:first-of-type': {
            color: 'muted.lightbluegrey',
            fontSize: [3],
            fontStyle: 'italic',
            lineHeight: [3],
          },
        }}
      >
        <Box sx={{ bg: 'muted.bluegrey', height: 1, mb: 6, width: '25%' }} />
        <MDXRenderer>{body}</MDXRenderer>
      </Box>
    </Box>
  )
}

const EntryPageTemplate = ({ data, errors }) => {
  const entry = data && data.entry
  return (
    <Fragment>
      {errors && <SEO title="GraphQL Error" />}
      {entry && <SEO title={entry.frontmatter.title || 'Untitled'} description={entry.excerpt} />}
      {entry && <Entry {...entry} />}
    </Fragment>
  )
}

const EntryPage = (props) => <EntryPageTemplate {...props} />

export default EntryPage

export const query = graphql`
  query LegacyEntryPageTemplateQuery($slug: String!) {
    entry: mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date
      }
    }
  }
`
