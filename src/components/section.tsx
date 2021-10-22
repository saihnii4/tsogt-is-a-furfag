import * as React from 'react';

const Section = ({ children }) => {
  return (
    <div
      className={
        'flex w-2/3 desktop:w-full flex-col desktop:flex-row justify-center m-auto desktop:m-0 gap-6 h-auto'
      }
    >
      {children}
    </div>
  );
};

export default Section;
