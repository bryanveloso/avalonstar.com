export default {
  name: 'bodyPortableText',
  title: 'Body',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
    },
    {
      type: 'mainImage',
      options: { hotspot: true },
    },
  ],
}
