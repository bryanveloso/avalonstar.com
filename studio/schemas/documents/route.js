import { RiLinksLine } from 'react-icons/ri'

export default {
  name: 'route',
  title: 'Route',
  type: 'document',
  icon: RiLinksLine,
  fieldsets: [
    {
      name: 'navigation',
      title: 'Navigation',
    },
  ],
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
    {
      name: 'isVisible',
      title: 'Visible',
      description: 'Is this route visible in navigation?',
      type: 'boolean',
      fieldset: 'navigation',
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      fieldset: 'navigation',
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
