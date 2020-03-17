export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'date',
      title: 'date',
      type: 'date',
    },
    {
      name: 'subject',
      title: 'Subject',
      type: 'string',
      description: 'What does this event pertain to?',
      options: {
        list: [
          { title: 'The Person', value: 'person' },
          { title: 'The Company', value: 'company' },
          { title: 'The Website', value: 'website' },
        ],
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'bodyPortableText',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'geopoint',
    },
    {
      name: 'coverImage',
      title: 'Cover',
      type: 'mainImage',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'date',
    },
  },
}
