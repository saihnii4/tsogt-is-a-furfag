import * as React from 'react';
import Paragraph from './paragraph';

const Image = ({ src, caption, ...imageProps }) => (
  <Paragraph>
    <img src={src} {...imageProps} />
    <i className={`text-center text-xs`}>{caption}</i>
  </Paragraph>
);

export default Image;
