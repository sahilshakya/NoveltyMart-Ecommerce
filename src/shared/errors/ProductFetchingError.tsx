import { FallbackProps } from "react-error-boundary";

const ProductFetchingError = (props: FallbackProps) => {
  const { error } = props;
  return (
    <div className="p-2">
      <h1 className="text-white text-normal">Error Occurred</h1>
      <p className="text-error text-h3">{error.message}</p>
    </div>
  );
};

export default ProductFetchingError;
