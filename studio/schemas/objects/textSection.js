export default {
  name: 'textSection',
  title: 'Text',
  type: 'object',
  fields: [
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
      name: 'text',
      type: 'portableText',
      title: 'Text',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({ heading }) {
      return {
        title: `${heading}`,
        subtitle: 'Text',
      }
    },
  },
}
