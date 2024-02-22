import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };
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
              ? "bg-primary text-white px-2 py-1 mx-1 "
              : "bg-white px-2 py-1 mx-1"
          }
        >
          {i}
        </button>
      );
    }
    return blocks;
  };
  if (totalPages === 1) {
    return;
  }
  return (
    <div className="text-right mt-3 ">
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
        className="bg-white p-2"
      >
        <MdKeyboardArrowLeft />
      </button>
      <span>{numberOfPages()}</span>
      <button
        onClick={nextPage}
        className="bg-white p-2"
        disabled={currentPage >= totalPages}
      >
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
