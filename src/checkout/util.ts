import { Product } from "./components/Contact";
import { IOrderRequest } from "./interfaces/orderRequest";

export interface Orders extends IOrderRequest {
  products: Product[];
  userId: number | undefined;
}

export const orderHandler = ({
  data,
  productOrdered,
  id,
}: {
  data: IOrderRequest;
  productOrdered: Product[];
  id: number | undefined;
}) => {
  const payload: Orders = {
    firstName: data.firstName,
    lastName: data.lastName,
    phone: data.phone,
    address1: data.address1,
    address2: data.address2,
    city: data.city,
    state: data.state,
    zip: data.zip,
    products: productOrdered,
    userId: id,
  };

  // const orderReq = await order(payload);
  // return orderReq;

  return payload;
};
