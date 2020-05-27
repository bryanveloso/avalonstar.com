/** @jsx jsx */
import BlockContent from '@sanity/block-content-to-react'
import { alpha } from '@theme-ui/color'
import { useResponsiveValue } from '@theme-ui/match-media'
import { formatDistanceStrict, differenceInDays, format, parseISO } from 'date-fns'
import { graphql, Link } from 'gatsby'
import numeral from 'numeral'
import { Fragment } from 'react'
import { jsx, Box, Grid, Heading, Text } from 'theme-ui'

import { Cover, SEO } from '@/components'
import serializers from '@/components/serializers/Entry'

import clientConfig from '../../client-config'

const Navigation = ({ text, publishedAt, slug, title }) => {
  return (
    <Box>
      <Text
        sx={{
          color: 'muted.bluegrey',
          fontSize: 0,
          textTransform: 'uppercase',
        }}
      >
        {text}
      </Text>
      <Link
        to={`/blog/${format(parseISO(publishedAt), 'yyyy')}/${slug.current}`}
        sx={{
          variant: 'styles.a',
          fontFamily: 'heading',
          fontSize: [4],
          lineHeight: [4],
        }}
      >
        {title}
        <span sx={{ color: 'white' }}>.</span>
      </Link>
    </Box>
  )
}

const Entry = (props) => {
  const { _rawBody, author, coverImage, number, publishedAt, title, prev, next } = props
  const ratio = useResponsiveValue([2.39 / 1, 4 / 1])
  return (
    <Box as="article">
      {coverImage && coverImage.asset && (
        <Cover ratio={ratio} asset={coverImage.asset.fluid} alt={coverImage.alt} caption={coverImage.caption} />
      )}
      <Box sx={{ my: [6, null, 7] }}>
        <Box sx={{ display: 'inline-flex', fontSize: 1 }}>
          {number > 0 && (
            <Text variant="counter">
              {numeral(number).format('000')}
              <span sx={{ px: 2 }}>&ndash;</span>
            </Text>
          )}
          <Text as="time" variant="date">
            {differenceInDays(new Date(), new Date(publishedAt)) < 3
              ? `${formatDistanceStrict(new Date(publishedAt), new Date())} ago`
              : format(new Date(publishedAt), 'MMMM dd, yyyy')}
          </Text>
        </Box>
        <Heading as="h1" variant="styles.h1">
          {title}
          <span sx={{ color: 'main.avagreen' }}>.</span>
        </Heading>
      </Box>
      <Box sx={{ bg: 'muted.bluegrey', height: 1, mb: 6, width: '25%' }} />
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
        {_rawBody && <BlockContent blocks={_rawBody} serializers={serializers} {...clientConfig.sanity} />}
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
      </Box>
      <Grid
        as="nav"
        gap={8}
        columns={[1, 2]}
        sx={{
          borderTop: '1px solid',
          borderColor: alpha('muted.bluegrey', 0.2),
          my: 8,
          pt: 4,
        }}
      >
        {prev && <Navigation text="Previously" publishedAt={prev.publishedAt} slug={prev.slug} title={prev.title} />}
        {next && <Navigation text="Up Next" publishedAt={next.publishedAt} slug={next.slug} title={next.title} />}
      </Grid>
    </Box>
  )
}

const EntryPageTemplate = ({ data, errors, pageContext }) => {
  const entry = data && data.entry
  return (
    <Fragment>
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
      {entry && <Entry {...entry} {...pageContext} />}
    </Fragment>
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
