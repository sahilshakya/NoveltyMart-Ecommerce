import { useState } from "react";
import { AdaptedCategory } from "../interfaces/category";

interface CategoryFilterProps {
  categories: AdaptedCategory[];
  setSelectedCategory: (name: string) => void;
  setMinPrice: (minPrice: number) => void;
  setMaxPrice: (maxPrice: number) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  setSelectedCategory,
  setMaxPrice,
  setMinPrice,
}) => {
  const [selectedItem, setSelectedItem] = useState("");
  const handleCategory = (name: string) => {
    if (selectedItem === name) {
      setSelectedCategory("");
      setSelectedItem("");
    } else {
      setSelectedItem(name);
      setSelectedCategory(name);
    }
  };
  return (
    <div className=" lg:max-w-[349px] ">
      <p className="font-semiBold text-regularSmall">Category</p>
      <div className="py-3 flex flex-col font-semiBold ">
        {categories?.map((category) => (
          <button
            className={`py-1 text-left ${
              selectedItem === category.name
                ? "text-primary text-regularSmall"
                : "text-gray-medium text-extraSmall"
            }`}
            key={category.id}
            onClick={() => handleCategory(category.name)}
          >
            {category.formattedName}
          </button>
        ))}
      </div>

      <div>
        <p className="font-semiBold text-regularSmall">Price</p>

        <div className="md:flex gap-2  ">
          <input
            type="number"
            placeholder="Min"
            className="w-full my-2  md:w-[108px] rounded-md focus:outline-none md:my-4 p-2"
            onChange={(e) => setMinPrice(+e.target.value)}
          />
          <input
            type="number"
            placeholder="Max"
            className="w-full my-2 md:w-[108px] rounded-md focus:outline-none md:my-4 p-2"
            onChange={(e) => setMaxPrice(+e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
