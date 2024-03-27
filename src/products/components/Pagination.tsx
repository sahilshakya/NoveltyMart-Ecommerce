import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { PaginationProps } from "../interfaces/pagination";

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
}: PaginationProps) => {
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const numberOfPages = () => {
    const blocks = [];
    for (let i = 1; i <= totalPages; i++) {
      blocks.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={
            currentPage === i
              ? "bg-primary text-white w-[1.75rem] h-[1.75rem] mx-1"
              : "bg-white w-[1.75rem] h-[1.75rem] mx-1"
          }
        >
          {i}
        </button>
      );
    }
    return blocks;
  };

  if (totalPages === 1) return;

  return (
    <div className="flex mt-3 ">
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
        className="bg-white w-7 h-7 mx-1 ml-auto flex justify-center items-center"
      >
        <MdKeyboardArrowLeft />
      </button>
      {numberOfPages()}
      <button
        onClick={nextPage}
        className="bg-white w-7 h-7 mx-1 flex justify-center items-center"
        disabled={currentPage >= totalPages}
      >
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
