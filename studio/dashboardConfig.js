export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61156fc2a02799178dc7a918',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-pmsttper',
                  apiId: 'bc04b4aa-807a-49bc-b099-426d6eeae531'
                },
                {
                  buildHookId: '61156fc3b851f4166991deb3',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-f44cvioh',
                  apiId: '5ff3f34a-bded-437d-a1df-3a89015f0ee5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andybywire/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-f44cvioh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
