import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ContactSchema } from "../ContactSchema";
import H5 from "../../shared/components/ui/H5";
import useCartStore from "../../store/cartStore";
import { Input, ReadOnlyInput } from "../../shared/components/ui/Input";
import useAuthStore from "../../store/authStore";
import { useEffect } from "react";
import { IOrderRequest } from "../interfaces/orderRequest";
import { formatPrice } from "../../shared/utils/common";
import { useCheckoutMutation } from "../mutation";
import { orderHandler } from "../util";

const defaultValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  zipCode: "",
};

export interface Product {
  productId: number;
  quantity: number;
  total: number;
}

const Contact = () => {
  const { cart } = useCartStore();
  const { user } = useAuthStore();

  const productOrdered = cart.map((i) => {
    return {
      productId: i.id,
      quantity: i.quantity,
      total: i.price,
    };
  });

  const id = user?.id;

  const total = () => {
    const price = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return price;
  };

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<IOrderRequest>({
    resolver: yupResolver(ContactSchema),
    defaultValues,
  });

  const addOrder = useCheckoutMutation();

  const onSubmit = async (data: IOrderRequest) => {
    const payload = await orderHandler({ data, productOrdered, id });

    addOrder.mutate({ payload });
  };

  useEffect(() => {
    if (user) {
      reset({
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
      });
    }
  }, [reset, user]);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:flex gap-6 justify-between"
      >
        <div className="bg-white p-5 md:w-[857px]">
          <h3 className="font-bold">Contact Information</h3>
          <div className="flex gap-5">
            <div>
              <label className=" text-extraSmall font-regularBold text-gray-medium">
                First Name
              </label>
              <ReadOnlyInput register={register} field="firstName" />
              {errors.firstName && (
                <p className="text-error font-bold">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <div>
                <label className=" text-extraSmall font-regularBold text-gray-medium">
                  Last Name
                </label>
                <ReadOnlyInput register={register} field="lastName" />
                {errors.lastName && (
                  <p className="text-error font-bold">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div>
            <label className="text-extraSmall font-regularBold text-gray-medium">
              Phone Number
            </label>
            <ReadOnlyInput register={register} field="phone" />
            {errors.phone && (
              <p className="text-error font-bold">{errors.phone.message}</p>
            )}
          </div>
          <h3 className="mt-3 font-bold">Contact Information</h3>
          <div>
            <label className="text-extraSmall font-regularBold text-gray-medium">
              Address Line 1
            </label>
            <Input register={register} field="address1" />
            {errors.address1 && (
              <p className="text-error font-bold">{errors.address1.message}</p>
            )}
          </div>
          <div>
            <label className="text-extraSmall font-regularBold text-gray-medium">
              Address Line 2
            </label>
            <Input register={register} field="address2" />
            {errors.address2 && (
              <p className="text-error font-bold">{errors.address2.message}</p>
            )}
          </div>
          <div className="flex gap-7">
            <div>
              <label className="text-extraSmall font-regularBold text-gray-medium">
                City
              </label>
              <Input register={register} field="city" />
              {errors.city && (
                <p className="text-error font-bold">{errors.city.message}</p>
              )}
            </div>

            <div>
              <label className="text-extraSmall font-regularBold text-gray-medium">
                State
              </label>
              <Input register={register} field="state" />
              {errors.state && (
                <p className="text-error font-bold">{errors.state.message}</p>
              )}
            </div>
            <div>
              <label className="text-extraSmall font-regularBold text-gray-medium">
                Zip
              </label>
              <Input register={register} field="zip" />
              {errors.zip && (
                <p className="text-error font-bold">{errors.zip.message}</p>
              )}
            </div>
          </div>
        </div>
        <div className="bg-white md:w-[599px] p-3 shadow-sm ">
          <H5>Order Summary</H5>
          {cart.map((item) => (
            <div key={item.id} className="lg:grid grid-cols-4 gap-3 mt-3">
              <div className="h-24 w-24 ">
                <img
                  src={item.images[0].image}
                  className="w-full h-full object-cover max-w-full"
                />
              </div>
              <div className="lg:col-span-3">
                <h3 className="font-bold mb-2">{item.name}</h3>
                <p>{item.description}</p>
                <p>Quantity:{item.quantity}</p>
                <p className="font-bold mb-2">
                  {formatPrice(item.price * item.quantity)}
                </p>
              </div>
            </div>
          ))}

          <div className="mb-2 lg:flex lg:justify-between">
            <p>Subtotal</p>
            <p>{formatPrice(total())}</p>
          </div>
          <div className="mb-2 lg:flex lg:justify-between">
            <p>Order Total</p>
            <p>{formatPrice(total())}</p>
          </div>

          <button className="bg-primary text-white p-2 mt-6 w-full ">
            Place Order
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact;
