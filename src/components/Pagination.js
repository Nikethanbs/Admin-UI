import React from "react";

const Pagination = ({ currentPage, totalPages, onPageClick }) => {
  return (
    <div className="pagination">
      <button onClick={() => onPageClick(1)} disabled={currentPage === 1}>
        &lt;
      </button>
      <button
        onClick={() => onPageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;&lt;
      </button>
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => onPageClick(index + 1)}
          disabled={currentPage === index + 1}
          className={currentPage === index + 1 ? "active" : ""}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => onPageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
      <button
        onClick={() => onPageClick(totalPages)}
        disabled={currentPage === totalPages}
      >
        &gt;&gt;
      </button>
    </div>
  );
};

export default Pagination;
