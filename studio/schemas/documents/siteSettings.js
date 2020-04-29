import { RiSettings3Line } from 'react-icons/ri'

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: RiSettings3Line,
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description provided to search engines and social media.',
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      descrption: 'Add descriptive keywords for the site.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    },
  ],
}
