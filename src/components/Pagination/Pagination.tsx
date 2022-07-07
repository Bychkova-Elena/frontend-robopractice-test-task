import React from "react";
import "./style.css";

export type PaginationProps = {
  page: number;
  totalPages: number;
  prevPage: () => void; 
  nextPage: () => void;
  setPage: (page:number) => void;
};
    
const Pagination: React.FC<PaginationProps> = ({ page, totalPages, prevPage, setPage, nextPage }) => {
  
  return (
  <div className="pagination">
  <p className="text">
    {page}/{totalPages}
  </p>
  <button onClick={prevPage} className="page">
    &larr;
  </button>
  {/* @ts-ignore */}
  {[...Array(totalPages).keys()].map((el) => (
    <button
      onClick={() => setPage(el + 1)}
      key={el}
      className={`page ${page === el + 1 ? "active" : ""}`}
    >
      {el + 1}
    </button>
  ))}
  <button onClick={nextPage} className="page">
    &rarr;
  </button>
</div>
)};

  export default React.memo(Pagination);