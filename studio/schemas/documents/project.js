export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'date',
      title: 'date',
      type: 'date'
    },
    {
      name: 'position',
      title: 'Position',
      type: 'reference',
      to: [{ type: 'position' }]
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'bodyPortableText'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'bodyPortableText'
    }
  ]
};
