export default {
  name: 'position',
  title: 'Position',
  type: 'document',
  fields: [
    {
      name: 'company',
      title: 'Company',
      type: 'string'
    },
    {
      name: 'title',
      title: 'Job Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'company',
        maxLength: 96
      }
    },
    {
      name: 'date',
      title: 'date',
      type: 'date'
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
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        { 
          type: 'object',
          fields: [
            {
              name: 'isActive',
              title: 'Active Project?',
              type: 'boolean',
              description: 'Is this version of the project still live?',
              options: {
                layout: 'checkbox'
              }
            },
            {
              name: 'name',
              title: 'Name',
              type: 'string'
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url'
            },
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'company',
      subtitle: 'title',
    }
  }
};
