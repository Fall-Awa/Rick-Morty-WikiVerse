import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ pageNumber, info, updatePageNumber }) {
  let pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <>
      {" "}
      <ReactPaginate
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages}
        onPageChange={pageChange}
        containerClassName="flex flex-wrap justify-center items-center gap-2 my-3"
        pageClassName="min-w-[40px] flex justify-center items-center"
        pageLinkClassName="flex justify-center items-center w-10 h-10 border border-gray-300 rounded-md transition-colors duration-200 text-gray-600 hover:bg-blue-100"
        previousClassName="prev"
        nextClassName="next"
        previousLinkClassName="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors h-10"
        nextLinkClassName="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors h-10"
        activeClassName="!bg-blue-500" // Style du conteneur actif
        activeLinkClassName="!text-white" // Style spécifique au lien actif
        disabledClassName="opacity-50 cursor-not-allowed"
        previousLabel="Prev"
        nextLabel="Next"
      />
    </>
  );
}
