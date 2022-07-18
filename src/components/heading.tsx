import * as React from "react";

export const Heading = ({ children, overrides }: { children: React.ReactNode, overrides?: string}) => {
    return (
      <h3 className={overrides ?? "text-xl"}>
        {children}
      </h3>
    )
}
