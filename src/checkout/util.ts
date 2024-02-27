import { order } from "./orderService";
import { Product } from "./components/Contact";
import { IOrderRequest } from "./interfaces/orderRequest";

export const orderHandler = async ({
  data,
  productOrdered,
  id,
}: {
  data: IOrderRequest;
  productOrdered: Product[];
  id: number;
}) => {
  try {
    const payload = {
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

    const orderReq = await order(payload);
    return orderReq;
  } catch (error) {
    console.error("Error in orderHandler:", error);
    throw error;
  }
};