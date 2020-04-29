export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Sections',
      of: [{ type: 'textSection' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
