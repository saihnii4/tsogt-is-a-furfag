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
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: '[data-sal]', // Selector of the elements to be animated
        animateClassName: 'sal-animate', // Class name which triggers animation
        disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        enterEventName: 'sal:in', // Enter event name
        exitEventName: 'sal:out', // Exit event name
      },
    },
  ],
};
