export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5cd50112b655652cfda9b6af',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-3w2tmb2b',
                  apiId: '652787f4-9f36-420a-9ab9-b802f421fd29'
                },
                {
                  buildHookId: '5cd50112b65565f04aa9b699',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-cc83t8cp',
                  apiId: '9002a0f9-44c6-4c85-baf9-24eaf3ab059a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AaronCuddeback/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-cc83t8cp.netlify.com', category: 'apps'}
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
