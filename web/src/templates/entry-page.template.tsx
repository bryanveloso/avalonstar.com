/** @jsx jsx */
import { alpha } from '@theme-ui/color'
import { formatDistanceStrict, differenceInDays, format } from 'date-fns'
import { graphql } from 'gatsby'
import { jsx, Box, Container, Heading, Text } from 'theme-ui'

import { EntryLayout } from '@/containers'
import { Cover, PortableText, SEO } from '@/components'
import { buildImageObj, imageUrlFor } from '@/lib'

const Entry = props => {
  const { _rawBody, author, coverImage, publishedAt, title } = props
  return (
    <Box as="article">
      {coverImage && coverImage.asset && (
        <Cover
          ratio={2.39 / 1}
          url={imageUrlFor(buildImageObj(coverImage))
            .width(1200)
            .height(Math.floor((9 / 16) * 1200))
            .fit('crop')
            .auto('format')
            .url()}
          alt={coverImage.alt}
          caption={coverImage.caption}
        />
      )}
      <Container variant="entry" sx={{ mx: 'auto', my: [6, 7, 8], px: 4 }}>
        <Box variant="structure.metadata">
          <Text as="time" variant="time">
            {differenceInDays(new Date(publishedAt), new Date()) > 3
              ? formatDistanceStrict(new Date(publishedAt), new Date())
              : format(new Date(publishedAt), 'MMMM dd, yyyy')}
          </Text>
        </Box>
        <Heading variant="title">
          {title}
          <span sx={{ color: 'main.avagreen' }}>.</span>
        </Heading>
      </Container>
      <Container
        variant="entry"
        sx={{
          mx: 'auto',
          px: 4,
          'p:first-of-type': {
            color: 'muted.lightbluegrey',
            fontSize: [4, null, 5, null],
            fontStyle: 'italic',
            lineHeight: ['2rem', null, '2.5rem', null],
          },
        }}
      >
        {_rawBody && <PortableText blocks={_rawBody} />}
        {author && (
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

const EntryPageTemplate = props => {
  const { data, errors } = props
  const entry = data && data.entry
  return (
    <EntryLayout>
      {errors && <SEO title="GraphQL Error" />}
      {entry && <SEO title={entry.title || 'Untitled'} />}
      {entry && <Entry {...entry} />}
    </EntryLayout>
  )
}

const EntryPage = props => <EntryPageTemplate {...props} />

export default EntryPage

export const query = graphql`
  query EntryPageTemplateQuery($id: String!) {
    entry: sanityEntry(id: { eq: $id }) {
      id
      publishedAt
      coverImage {
        alt
        caption
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
      }
      title
      slug {
        current
      }
      _rawBody(resolveReferences: { maxDepth: 5 })
      author {
        name
      }
    }
  }
`
