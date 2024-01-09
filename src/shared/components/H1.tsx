import React from "react";

interface H1Props {
  children: React.ReactNode;
}
const H1: React.FC<H1Props> = ({ children }) => {
  return <p className="text-h1 font-bold">{children}</p>;
};

export default H1;
