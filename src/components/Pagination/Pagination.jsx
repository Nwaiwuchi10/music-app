import React, { useEffect } from "react";

import "./Pagination.css";
import { useLocation } from "react-router-dom";

const Pagination = ({
  totalPosts,
  itemsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / itemsPerPage); i++) {
    pages.push(i);
  }
  const { pathname } = useLocation();
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="pagination">
      {/* <Carousel> */}
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page, scrollToTop())}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
      {/* </Carousel> */}
    </div>
  );
};

export default Pagination;
