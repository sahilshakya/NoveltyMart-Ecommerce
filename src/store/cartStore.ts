import { create } from "zustand";
import { AdaptedProduct } from "../products/interfaces/product";
import { devtools, persist } from "zustand/middleware";

interface CartState {
  cart: AdaptedProduct[];
  addToCart: (product: AdaptedProduct, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  removeAllItems: () => void;
}

const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set) => ({
        cart: [],
        addToCart: (product, quantity = 1) => {
          set((state) => {
            const existingItem = state.cart.find(
              (item) => item.id === product.id
            );
            const availableQuantity = product.quantity;

            if (existingItem) {
              return {
                cart: state.cart.map((item) => {
                  return item.id === product.id
                    ? {
                        ...item,
                        quantity:
                          item.quantity < availableQuantity
                            ? item.quantity + quantity
                            : item.quantity,
                      }
                    : item;
                }),
              };
            }
            return {
              cart: [...state.cart, { ...product, quantity }],
            };
          });
        },
        removeFromCart: (productId) => {
          set((state) => ({
            cart: state.cart.filter((item) => item.id !== productId),
          }));
        },

        updateQuantity: (productId, quantity: number = 1) => {
          set((state) => {
            const newCart = [...state.cart];
            const updatedCartIndex = newCart.findIndex(
              (item) => item.id === productId
            );
            newCart[updatedCartIndex] = {
              ...newCart[updatedCartIndex],
              quantity: quantity,
            };
            return {
              cart: newCart,
            };
          });
        },
        removeAllItems: () => set({ cart: [] }),
      }),
      { name: "cart-Storage" }
    ),
    {
      enabled: true,
    }
  )
);

export default useCartStore;
