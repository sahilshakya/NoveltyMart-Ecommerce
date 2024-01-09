import React from "react";

interface H6Props {
  children: React.ReactNode;
  styles?: string; // Optional style string
}

const H6: React.FC<H6Props> = ({ children, styles = "" }) => {
  return <p className={`text-h6 font-bold ${styles}`}>{children}</p>;
};

export default H6;
