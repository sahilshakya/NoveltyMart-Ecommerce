import H5 from "../../shared/components/H5";
import Button from "../../shared/components/Button";

const Summary = () => {
  return (
    <div className="bg-white w-1/6 p-3 shadow-sm h-full">
      <H5>Summary</H5>
      <div className="mb-2 flex justify-between">
        <p>Subtotal</p>
        <p>$</p>
      </div>
      <div className="mb-2 flex justify-between">
        <p>Subtotal</p>
        <p>$</p>
      </div>
      <Button className="bg-primary text-white p-2 mt-6 w-full ">
        Proceed to Checkout
      </Button>
    </div>
  );
};

export default Summary;
