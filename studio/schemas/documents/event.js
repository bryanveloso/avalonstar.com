export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'date',
      title: 'date',
      type: 'date'
    },
    {
      name: 'subject',
      title: 'Subject',
      type: 'array',
      description: 'What does this event pertain to?',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Bryan', value: 'bryan' },
          { title: 'Avalonstar', value: 'avalonstar' }
        ]
      }
    },
    {
      name: 'body',
      title: 'Body',
      type: 'bodyPortableText'
    }
  ]
};
