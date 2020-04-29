import { RiLinksLine } from 'react-icons/ri'

export default {
  name: 'route',
  title: 'Route',
  type: 'document',
  icon: RiLinksLine,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'This represents the title of the page in the browser',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'page',
      type: 'reference',
      description: 'Select the page that this route should point to',
      to: [
        {
          type: 'page',
        },
      ],
    },
  ],
  preview: {
    select: {
      pageTitle: 'title',
      slug: 'slug.current',
    },
    prepare({ pageTitle, slug }) {
      return {
        title: pageTitle,
        subtitle: slug === '/' ? '/' : `/${slug}`,
      }
    },
  },
}
