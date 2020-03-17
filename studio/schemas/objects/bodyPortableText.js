import linkIcon from 'react-icons/lib/fa/paperclip'

export default {
  name: 'bodyPortableText',
  title: 'Body',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      marks: {
        annotations: [
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal Link',
            blockEditor: {
              icon: linkIcon,
            },
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [{ type: 'event' }, { type: 'position' }, { type: 'project' }],
              },
            ],
          },
        ],
      },
    },
    {
      type: 'mainImage',
      options: { hotspot: true },
    },
  ],
}
