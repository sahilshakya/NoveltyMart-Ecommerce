import React from "react";

interface H4Props {
  children: React.ReactNode;
  styles?: string; // Optional style string
}

const H4: React.FC<H4Props> = ({ children, styles = "" }) => {
  return <p className={`text-h4 font-bold ${styles}`}>{children}</p>;
};

export default H4;
