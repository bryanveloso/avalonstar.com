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
      type: 'captionedImage',
      options: { hotspot: true }
    }
  ]
}