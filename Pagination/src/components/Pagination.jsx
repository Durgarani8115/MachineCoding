// components/Pagination.jsx

import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const generatePages = () => {
    let pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div style={{ display: "flex", gap: "8px", marginTop: "20px" }}>
      
      {/* Prev */}
      <button onClick={handlePrev} disabled={currentPage === 1}>
        Prev
      </button>

      {/* Page Numbers */}
      {generatePages().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            fontWeight: currentPage === page ? "bold" : "normal",
          }}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;