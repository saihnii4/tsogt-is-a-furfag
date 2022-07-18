import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ data }: { data? }) => {
  return (
    <StaticQuery
      query={graphql`
        {
          file(relativePath: { eq: "tsogt.png" }) {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      `}
      render={(data) => (
        <>
          {/* @ts-ignore */}
          <Helmet>
            <title>Tsogt is a Furry!</title>
            {/* @ts-ignore */} {/* i still don't know why I did this */}
            <meta name="icon" href={data.file.childImageSharp.fluid.src} />

            <meta property="og:title" content="Tsogt is a Furry!" />
            <meta property="og:type" content="website" />
            <meta
              property="og:url"
              content="https://tsogtisafurry.gatsbyjs.io"
            />
            <meta
              property="og:image"
              content={data.file.childImageSharp.fluid.src}
            />
            <meta
              property="og:description"
              content="because he's weird and he likes that one wolf in wolfwalkers"
            />
            <meta name="theme-color" content="#D4CB92" />

            <meta name="twitter:card" content="summary_large_image" />
          </Helmet>
        </>
      )}
    />
  );
};

export default SEO;
