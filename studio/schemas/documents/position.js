import { RiBriefcaseLine } from 'react-icons/ri'

export default {
  name: 'position',
  title: 'Position',
  type: 'document',
  icon: RiBriefcaseLine,
  fields: [
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Job Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'company',
        maxLength: 96,
      },
    },
    {
      name: 'date',
      title: 'date',
      type: 'date',
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'bodyPortableText',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'bodyPortableText',
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'project' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'company',
      subtitle: 'title',
    },
  },
}
