import { useMutation } from "@tanstack/react-query";
import { order } from "../orderService";
import { Orders } from "../util";
import { uiRoutes } from "../../shared/constant/uiRoutes";
import { useNavigate } from "react-router-dom";
import useCartStore from "../../store/cartStore";
import { useErrorBoundary } from "react-error-boundary";

export const useCheckoutMutation = () => {
  const { removeAllItems } = useCartStore();
  const navigate = useNavigate();
  const { showBoundary } = useErrorBoundary();

  return useMutation({
    mutationFn: async ({ payload }: { payload: Orders }) => {
      const resp = await order(payload);
      return resp;
    },
    onSuccess: () => {
      navigate(uiRoutes.success);
      removeAllItems();
    },
    onError: (err: Error) => {
      showBoundary(err);
    },
  });
};
