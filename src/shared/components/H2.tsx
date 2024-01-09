interface H2Props {
  children: React.ReactNode;
}
const H2: React.FC<H2Props> = ({ children }) => {
  return <p className="text-h2 font-bold">{children}</p>;
};

export default H2;
