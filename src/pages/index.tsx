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

  console.log(data);

  const wolfWalker = useImage('presumption.png');
  const tsogt = useImage('tsogt.png');

  console.log(tsogt);

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
            'flex  text-7xl justify-center items-center flex-col gap-6 w-full pt-6'
          }
        >
          <div className={'text-4xl desktop:text-6xl m-auto'}>
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
            'flex flex-col desktop:flex-row flex-1 gap-3 w-2/3 m-auto desktop:w-full justify-center text-center'
          }
        >
          <p>let's take an example from the movie shall we?</p>
        </div>
        <div
          className={
            'flex w-2/3 desktop:w-full flex-col desktop:flex-row justify-center m-auto desktop:m-0 gap-6 h-auto'
          }
        >
          <div className="flex flex-col gap-12">
            <div className={'flex flex-col flex-1 gap-3 w-full float-left'}>
              <img
                src={wolfWalker}
                className={
                  'w-full desktop:w-2/3 h-auto m-auto hover:!blur-none !blur-sm float-left'
                }
              />
              <i className={`text-center text-xs`}>
                yep this is the scene [blurred to protect your eyes]
              </i>
            </div>
            <div
              className={
                'flex flex-1 flex-col desktop:flex-row gap-6 w-full float-right'
              }
            >
              <Paragraph>
                Tsogt has openly stated that he found this scene "stimulating"
                and that he derives joy from viewing this scene. Throughout the
                entire movie, Tsogt had peaked my interest in how he composed
                himself during and after the movie had started playing. He would
                often jabber about his predictions of the plot and his views on
                which character he was similar to. This proves that Tsogt
                enjoyed the movie, but that's not my goal.
              </Paragraph>
              <Paragraph>
                <h3>
                  <b>Regression into primitive and archaic instincts</b>
                </h3>
                Over half of all furries have had interest into a form of sexual
                content known as "yiff". "Yiffing" is a term that describes
                fictional (sometimes cartoonish) animals, known as fursonas by
                the furry community, having intercourse with each other, this
                form of cross-breeding is greatly frowned upon by society and is
                a form of "de-evolution".
                <br />
                Tsogt has openly stated in a recent interview that he did indeed
                view the characters as attractive and wanted to have cotitus
                with them.
              </Paragraph>
            </div>
          </div>
        </div>
        <hr />
        <h4 className={'text-center pb-12'}>This is the end of my ted talk, good-bye</h4>
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
