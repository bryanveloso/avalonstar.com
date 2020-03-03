import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

export default {
  name: 'entry',
  title: 'Entry',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'isFeatured',
      title: 'Featured',
      type: 'boolean',
      description: 'Is this post featured?',
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'publishedAt',
      title: 'Publish Date',
      type: 'datetime',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    },
    {
      name: 'coverImage',
      title: 'Cover',
      type: 'captionedImage',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'bodyPortableText',
    },
  ],
  orderings: [
    {
      title: 'Publishing date new–>old',
      name: 'publishingDateAsc',
      by: [
        { field: 'publishedAt', direction: 'asc' },
        { field: 'title', direction: 'asc' },
      ],
    },
    {
      title: 'Publishing date old->new',
      name: 'publishingDateDesc',
      by: [
        { field: 'publishedAt', direction: 'desc' },
        { field: 'title', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'coverImage',
    },
    prepare(selection) {
      const { title = 'Untitled', publishedAt, slug, media } = selection
      const dateSegment = format(parseISO(publishedAt), 'yyyy')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        subtitle: publishedAt ? path : 'Missing published date',
        media,
      }
    },
  },
}
