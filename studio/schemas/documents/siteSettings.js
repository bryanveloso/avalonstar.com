export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
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
        layout: 'tags'
      }
    },
    {
      name: 'author',
      type: 'reference',
      ttile: 'Author',
      to: [{ type: 'author' }]
    }
  ]
}