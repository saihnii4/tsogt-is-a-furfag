import * as React from 'react';

const Paragraph = ({ children, ...props }) => (
  <div className={'flex flex-col flex-1 gap-3'} {...props}>{children}</div>
);

export default Paragraph;
