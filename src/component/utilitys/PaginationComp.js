import React from "react";
import ReactPaginate from "react-paginate";

export const PaginationComp = ({ pageCount, onPress }) => {
  // mli kankliw 3liha kaytzad numpga b 1
  // okat activer functon likatji mn onPress
  const handlePageClick = (data) => {
    onPress(data.selected + 1);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="pre"
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};
