import { AdaptedProduct, Image } from "./product";

export interface ProductProp {
  product: AdaptedProduct;
}

interface QuantityState {
  value: number;
  error: string;
}

export interface ProductDetailProps extends ProductProp {
  quantity: QuantityState;
  setQuantity: (state: QuantityState) => void;
  mainImages: Image | null;
  setMainImages: (images: Image | null) => void;
}
