export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5db9c68606635c01969880a0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4o3nmnms',
                  apiId: '5be6496c-d19a-4ed0-9ad5-e407c091c529'
                },
                {
                  buildHookId: '5db9c68606635c019f98809d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-3y36r8fb',
                  apiId: '5352acfe-1de1-428a-aa65-4225f5d8c076'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nathSierra/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-3y36r8fb.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
