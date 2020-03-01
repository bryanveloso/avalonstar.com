export default {
  name: "author",
  title: "Author",
  type: "document",
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96
      }
    },
    {
      name: "bio",
      title: "Biography",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block"
        }
      ]
    }
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "slug.current"
    }
  }
};