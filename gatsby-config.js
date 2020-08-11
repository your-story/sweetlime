/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    author: 'Rahul Guha',
    email: 'rahul.guha@gmail.com'
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "rahul-guha",
        protocol: "https",
        hostname: "www.rahul-guha.com",
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
          siteUrl: "https://www.example.com",
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    `gatsby-transformer-sharp`,
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxwidth: 750,
              linkImagesToOriginal: false
            }
          }
          
        ]
      }
    },
    // 'gatsby-source-graphql',
    // {
    //   resolve: 'gatsby-source-graphql',
    //   options: {
    //     typeName: 'WP',
    //     fieldName: 'wordpress',
    //     url: 'http://www.purple-porch.com/graphql',
    //     refetchInterval: 30
    //   }
    // }
    
  ],
  
}
