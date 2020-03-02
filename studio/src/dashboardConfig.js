export default {
  widgets: [
    {
      name: 'document-list',
      options: {
        title: 'Recent Entries',
        order: 'publishedAt desc',
        types: ['entry']
      },
    },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              title: 'Netlify Deployments',
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  title: 'Sanity Studio',
                  apiId: 'f76a320e-f447-42c9-ba07-ef51339185c3',
                  buildHookId: '5e5cb4dcb008446aad2dd43a',
                  name: 'avalonstar-com-sanity'
                },
                {
                  title: 'Website',
                  apiId: '39c73858-e50b-4f47-88c7-b6d2f266195a',
                  buildHookId: '5e5cb99541bf9693bdc7fff7',
                  name: 'avalonstar-com'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub Repository',
            value: 'https://github.com/avalonstar/dot-com',
            category: 'Code',
          },
          {
            title: 'Frontend',
            value: 'https://avalonstar-com.netlify.com',
            category: 'Apps'
          }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
  ]
};