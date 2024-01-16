import { useEffect, useState } from "react";
import H5 from "../../shared/components/H5";
import Product from "./Product";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  price: number;
  discontedPrice: number;
  description: string;
  images: [];
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/api/v1/products");
    console.log(response.data.data.rows);
    setProducts(response.data.data.rows);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="px-12 py-10 bg-gray-light">
        <H5>Products</H5>
        <div className="mt-5 flex">
          {products && products.map((product) => <Product product={product} />)}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
