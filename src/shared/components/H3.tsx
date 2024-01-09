import React from "react";

interface H3Props {
  children: React.ReactNode;
}

const H3: React.FC<H3Props> = ({ children }) => {
  return <p className="text-h3 font-bold">{children}</p>;
};

export default H3;
