import { FallbackProps } from "react-error-boundary";

const SomethingWentWrong = (props: FallbackProps) => {
  const { error, resetErrorBoundary } = props;
  return (
    <div className="bg-gray-dark h-screen r flex flex-col items-center justify-center">
      <h1 className="text-white text-normal">Error Occurred</h1>
      <p className="text-error text-h3">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="bg-warning rounded-lg p-3 font-semiBold mt-5"
      >
        Reload Page
      </button>
    </div>
  );
};

export default SomethingWentWrong;
