/** @jsx jsx */
import { alpha } from '@theme-ui/color'
import { formatDistanceStrict, differenceInDays, format } from 'date-fns'
import { graphql } from 'gatsby'
import numeral from 'numeral'
import { jsx, Box, Container, Heading, Text } from 'theme-ui'

import { EntryLayout } from '@/containers'
import { Cover, PortableText, SEO } from '@/components'

const Entry = (props) => {
  const { _rawBody, author, coverImage, number, publishedAt, title } = props
  return (
    <Box as="article">
      {coverImage && coverImage.asset && (
        <Cover
          ratio={4 / 1}
          asset={coverImage.asset.fluid}
          alt={coverImage.alt}
          caption={coverImage.caption}
        />
      )}
      <Container variant="entry" sx={{ mx: 'auto', my: [6, 7, 8], px: 4 }}>
        <Box variant="structure.metadata" sx={{ display: 'inline-flex' }}>
          {number > 0 && (
            <Text sx={{ color: 'muted.midgrey' }}>
              {numeral(number).format('000')}
              <span sx={{ px: 2 }}>&ndash;</span>
            </Text>
          )}
          <Text as="time" variant="time">
            {differenceInDays(new Date(), new Date(publishedAt)) < 3
              ? `${formatDistanceStrict(new Date(publishedAt), new Date())} ago`
              : format(new Date(publishedAt), 'MMMM dd, yyyy')}
          </Text>
        </Box>
        <Heading variant="title">
          {title}
          <span sx={{ color: 'main.avagreen' }}>.</span>
        </Heading>
      </Container>
      <Container variant="entry" sx={{ mx: 'auto', px: 4 }}>
        <Box sx={{ bg: 'muted.lightbluegrey', height: 2, width: '20%' }} />
      </Container>
      <Container
        variant="entry"
        sx={{
          mx: 'auto',
          px: 4,
          'p:first-of-type': {
            color: 'muted.lightbluegrey',
            fontSize: [3, 5],
            fontStyle: 'italic',
            lineHeight: ['2rem', '2.5rem'],
          },
        }}
      >
        {_rawBody && <PortableText blocks={_rawBody} />}
        {author && (
          // TODO: Figure something out with this.
          <Box
            sx={{
              display: 'none',
              borderTop: '1px solid',
              borderColor: alpha('muted.bluegrey', 0.2),
              my: [6, 7, 8],
              py: 4,
            }}
          >
            {author.name}
          </Box>
        )}
      </Container>
    </Box>
  )
}

const EntryPageTemplate = (props) => {
  const { data, errors } = props
  const entry = data && data.entry
  return (
    <EntryLayout>
      {errors && <SEO title="GraphQL Error" />}
      {entry && (
        <SEO
          title={entry.title || 'Untitled'}
          description={entry.excerpt}
          meta={[
            { name: `twitter:image`, content: entry.coverImage.asset.url },
            { name: `twitter:image:alt`, content: entry.coverImage.alt },
          ]}
        />
      )}
      {entry && <Entry {...entry} />}
    </EntryLayout>
  )
}

const EntryPage = (props) => <EntryPageTemplate {...props} />

export default EntryPage

export const query = graphql`
  query EntryPageTemplateQuery($id: String!) {
    entry: sanityEntry(id: { eq: $id }) {
      id
      publishedAt
      coverImage {
        alt
        caption
        asset {
          url
          fluid(maxWidth: 1080) {
            ...GatsbySanityImageFluid
          }
        }
      }
      number
      title
      slug {
        current
      }
      _rawBody(resolveReferences: { maxDepth: 5 })
      author {
        name
      }
      excerpt
      readingTimeInMinutes
    }
  }
`
