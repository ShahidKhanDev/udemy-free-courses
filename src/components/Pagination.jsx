import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-700 dark:text-gray-400 font-inter">
        Showing page{" "}
        <span className="font-semibold text-gray-900 font-inter dark:text-white">
          {currentPage}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-gray-900 font-inter dark:text-white">
          {totalPages}
        </span>
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center justify-center h-8 px-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg font-inter me-3 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
        >
          Prev
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center justify-center h-8 px-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg font-inter hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
