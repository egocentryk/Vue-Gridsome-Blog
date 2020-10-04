// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Recenzje Seriali',
  siteDescription: '',

  templates: {
    Post: '/:title',
    Tag: '/tag/:id'
  },

  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        latest: true,
        feedOptions: {
          title: 'Recenzje Seriali',
          feed_url: 'https://recenzjeseriali.pl/rss.xml',
          site_url: 'https://recenzjeseriali.pl'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://recenzjeseriali.pl' + node.path,
          author: node.author,
          date: node.date
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    }
  ],
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },
}
