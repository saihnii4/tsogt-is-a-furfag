import { graphql } from 'gatsby';
import * as React from 'react';
import Paragraph from '../components/paragraph';
import Section from '../components/section';
import Image from '../components/image';
import SEO from '../components/seo';

const App = ({ data }) => {
  const useImage = (file) => {
    return data.allFile.edges.reduce((acc, val) => {
      if (acc) return acc;
      const img = val.node.childImageSharp.fluid;
      return img.originalName === file ? img.src : undefined;
    }, undefined);
  };

  const wolfWalker = useImage('presumption.png');
  const tsogt = useImage('tsogt.png');

  return (
    <>
      <SEO />
      <div
        className={
          'flex h-full w-full desktop:w-1/3 flex-col mb-0 mt-0 ml-auto mr-auto gap-12'
        }
      >
        <div
          className={
            'flex text-7xl justify-center items-center flex-col gap-6 w-full pt-6'
          }
        >
          <div className={'flex justify-center text-4xl desktop:text-6xl'}>
            <h1>Tsogt is a furry</h1>
          </div>
          <div className={'h-full w-full flex justify-center items-center'}>
            <h3
              className={'font-light text-lg desktop:text-3xl mobile:text-xl'}
            >
              and I have irrefutable proof!
            </h3>
          </div>
        </div>

        <Image
          src={tsogt}
          caption="Exhibit A: Tsogt is existing, which 100% of furries do. Sus 🤨"
          className={'m-auto w-5/6 laptop:w-2/3 desktop:w-full'}
        />
        <Section>
          <Paragraph>
            <p>
              umm, tsogt is a furry, i mean he says he wants to have intercourse
              with wolves and he's sexualizing canines, which are the
              fundamental principles of a furry "enthusiast".
            </p>
            <p>
              not to mention the countless number of times he has shown his
              indifference to <i>exotic</i> content
            </p>
            <p>
              to say tsogt isn't weird would be to say nothing, but no one is
              flawless, so what else do i have on him?
            </p>
          </Paragraph>
          <Paragraph>
            <p>
              tsogt has repeatedly shown his <i>"interest"</i> for anime, and
              doesn't shy from letting us know it. for instance, Tsogt has shown
              an <i>"appreciation"</i> for a particular Naruto character, I
              believe it was Hinata or something, and how he views her as
              sexually attractive.
            </p>
            <p>
              normally this is acceptable but no it is not, and as a resident
              snowflake tasked with gatekeeping humor, i shall not stand for
              this.
            </p>
          </Paragraph>
          <Paragraph>
            <p>
              On top of this, Tsogt has shown a sus interest in media depicting
              sexual activities, the furry community are notorious for such
              actions.
            </p>
          </Paragraph>
          <Image
            src={
              'https://i.pinimg.com/564x/3d/61/de/3d61deb197b65c4fe094469ef3e3711b--legs-tumblr-animal-humor.jpg'
            }
            additionalClasses={null}
            caption={
              '"haha, a literal wolf walker, gib me internet points" - some idiot on reddit or 9gag'
            }
          />
        </Section>
        <hr className="border-black" />
        <div
          className={
            'flex flex-col flex-1 gap-3 w-2/3 m-auto desktop:w-full text-center'
          }
        >
          <p>let's take an example from the movie shall we?</p>
        </div>
        <Section>
          <Image
            src={wolfWalker}
            caption="yep this is the scene"
            additionalClasses={'w-2/3 h-auto m-auto'}
          />
          <div className={'flex flex-1 flex-col desktop:flex-row gap-6 w-full'}>
            <Paragraph>
              <p>
                when tsogt watched this scene he probably liked it becuz he a
                furri, i can barely write anything cause i'm so tired, i'm doing
                this so late at night.
              </p>
            </Paragraph>
            <Paragraph>
              <p>
                also wtf is this about the k*k? yall have gone mad. also lmao
                imagine reading this entire "article", if you can call it that,
                I spent like 3 hours on it.
              </p>
            </Paragraph>
          </div>
        </Section>
        <p className={'flex justify-center flex-col items-center gap-4'}>
          <b>TL;DR: tsogt furry becuz</b>
          <ul className={'list-disc'}>
            <li>he a sussy baka</li>
            <li>he like wolf</li>
            <li>he talk about weird stuf</li>
          </ul>
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "" } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              src
              originalName
            }
          }
        }
      }
    }
  }
`;

export default App;
