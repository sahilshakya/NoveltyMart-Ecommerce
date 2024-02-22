import { Link } from "react-router-dom";
import H3 from "../../shared/components/ui/H3";
import { uiRoutes } from "../../shared/constant/uiRoutes";
import Button from "../../shared/components/ui/Button";

const OrderSuccess = () => {
  return (
    <div className="bg-white md:w-full p-3 shadow-sm h-[275px] text-secondary mx-auto">
      <H3>Order Success full</H3>
      <Link to={uiRoutes.products}>
        <Button className="bg-primary text-white p-2 rounded-md">
          Go to Home
        </Button>
      </Link>
    </div>
  );
};

export default OrderSuccess;
