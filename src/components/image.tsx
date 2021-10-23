import * as React from "react";

const Image = ({ src, caption, ...imageProps }) => (
  <div className={"flex flex-col flex-1 gap-3 h-full"}>
    <img src={src} {...imageProps} />
    <i className={`text-center text-xs`}>{caption}</i>
  </div>
);

export default Image;
