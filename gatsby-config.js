module.exports = {
  siteMetadata: {
    siteUrl: 'https://dulguuncodes.gatsbyjs.io',
    title: 'tsogt is a furry',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`noto serif display\:300,400,500`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Tsogt is a furry',
        short_name: 'tsogt is a furry',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#EB6534',
        display: 'fullscreen',
        icon: 'src/images/tsogt.png',
      },
    },
  ],
};
