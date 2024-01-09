import React from "react";

interface H5Props {
  children: React.ReactNode;
  styles?: string; // Optional style string
}

const H5: React.FC<H5Props> = ({ children, styles = "" }) => {
  return <p className={`text-h5 font-bold ${styles}`}>{children}</p>;
};

export default H5;
