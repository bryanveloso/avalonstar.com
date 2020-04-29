import RiLinksLine from 'react-icons/ri'

export default {
  name: 'portableText',
  title: 'Text',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      marks: {
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'External link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                description: 'Read https://css-tricks.com/use-target_blank/',
                type: 'boolean',
              },
            ],
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal Link',
            blockEditor: {
              icon: RiLinksLine,
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
