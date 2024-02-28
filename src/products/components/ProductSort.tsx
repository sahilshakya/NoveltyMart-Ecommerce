import H5 from "../../shared/components/ui/H5";

interface ProductSortedProps {
  setSorted: (type: string) => void;
}

export const ProductSort = ({ setSorted }: ProductSortedProps) => {
  return (
    <div className="flex justify-between gap-4">
      <H5>Products</H5>
      <div>
        <select
          onChange={(e) => setSorted(e.target.value)}
          className="px-3 py-1 rounded-md outline-1"
        >
          <option value="">All</option>
          <option value="desc">Most Recent</option>
          <option value="asc">Most Oldest</option>
        </select>
      </div>
    </div>
  );
};
