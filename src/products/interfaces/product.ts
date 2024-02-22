export interface Image {
  image: string;
  id: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  discountPrice: number;
  images: Image[];
  brand: { name: string };
  category: { name: string };
  description: string;
  subCategory: { name: string };
}

export interface ProductPartial {
  id: number;
  name: string;
  price: number;
  quantity: number;
  discountPrice: number;
  images: Image[];
  // images: { image: string }[];
  brand: { name: string }[];
  category: { name: string };
  description: string;
  subCategory: { name: string };
}

export interface AdaptedProduct extends Product {
  formattedPrice: string;
  availableQuantity: number;
}

export interface AdaptedProductPartial extends ProductPartial {
  formattedPrice: string;
  formattedDiscount: string;
}
