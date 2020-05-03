/** @jsx jsx */
import { format } from 'date-fns'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { jsx, Box, Container, Heading, Text } from 'theme-ui'

import { EntryLayout } from '@/containers'
import { SEO } from '@/components'

const Entry = (props) => {
  const {
    body,
    frontmatter: { date, title },
  } = props
  return (
    <Box as="article">
      <Box
        p={4}
        mb={6}
        mx={4}
        sx={{ border: '2px solid', borderColor: 'main.avayellow', borderRadius: 2 }}
      >
        <Text sx={{ color: 'muted.yellow', fontSize: 1, lineHeight: '1.5rem' }}>
          The entry below is classified as a <strong sx={{ color: 'white' }}>LEGACY</strong> post,
          meaning that it was written (well) before the current version of Avalonstar was released.
          Although these posts have survived the numerous moves over years, there is no guarantee
          that they&apos;ve survived the trip unscathed (especially the links).
        </Text>
      </Box>
      <Container variant="entry" sx={{ mx: 'auto', my: [6, 8], px: 4 }}>
        <Box variant="structure.metadata" sx={{ display: 'inline-flex' }}>
          <Text sx={{ color: 'muted.midgrey' }}>
            LEGACY
            <span sx={{ px: 2 }}>&ndash;</span>
          </Text>
          <Text as="time" variant="time">
            {format(new Date(date), 'MMMM dd, yyyy')}
          </Text>
        </Box>
        <Heading variant="entry.title">
          {title}
          <span sx={{ color: 'main.avagreen' }}>.</span>
        </Heading>
      </Container>
      <Container variant="entry">
        <Box sx={{ bg: 'muted.lightbluegrey', height: 2, width: '20%' }} />
        <MDXRenderer>{body}</MDXRenderer>
      </Container>
    </Box>
  )
}

const EntryPageTemplate = ({ data, errors }) => {
  const entry = data && data.entry
  return (
    <EntryLayout>
      {errors && <SEO title="GraphQL Error" />}
      {entry && <SEO title={entry.title || 'Untitled'} description={entry.excerpt} />}
      {entry && <Entry {...entry} />}
    </EntryLayout>
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
