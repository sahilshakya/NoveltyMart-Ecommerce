import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  return <Navigate to="/" />;
};

export default Protected;
