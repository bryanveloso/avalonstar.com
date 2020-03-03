export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fieldsets: [{ name: 'social', title: 'Social Networks' }],
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
        },
      ],
    },
    {
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
      fieldset: 'social',
    },
    {
      name: 'github',
      title: 'GitHub',
      type: 'url',
      fieldset: 'social',
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
      fieldset: 'social',
    },
    {
      name: 'twitch',
      title: 'Twitch',
      type: 'url',
      fieldset: 'social',
    },
    {
      name: 'twitter',
      title: 'Twitter',
      type: 'url',
      fieldset: 'social',
    },
    {
      name: 'youtube',
      title: 'YouTube',
      type: 'url',
      fieldset: 'social',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
    },
  },
}
