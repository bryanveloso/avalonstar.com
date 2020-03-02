export default {
  widgets: [
    { 
      name: 'project-info',
    },
    { 
      name: 'netlify',
      options: {
        title: 'Netlify Deployments',
        sites: [
          {
            title: 'Sanity Studio',
          },
          {
            title: 'Website',
          }
        ]
      } 
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: {
        title: 'Recent Entries',
        order: 'publishedAt desc',
        types: ['entry']
      },
      layout: { width: 'medium' }
    }
  ]
};