import React, { useState } from 'react';
export const PaginationFunction = (data) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const handleClick = (num) => {
    setCurrentPage(num);
  };
  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          style={{ cursor: 'pointer' }}
          onClick={() => handleClick(number)}
          className={currentPage === number ? 'page-item active' : 'page-item'}
        >
          <span className='page-link'>{number}</span>
        </li>
      );
    } else {
      return null;
    }
  });
  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li
        style={{ cursor: 'pointer' }}
        className='page-item'
        onClick={handleNextbtn}
      >
        <span className='page-link'>&hellip;</span>
      </li>
    );
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <li
        style={{ cursor: 'pointer' }}
        className='page-item'
        onClick={handlePrevbtn}
      >
        <span className='page-link'>&hellip;</span>
      </li>
    );
  }
  const pagination = (
    <nav>
      <ul className='pagination'>
        <li
          style={{ cursor: 'pointer' }}
          className={
            currentPage === pages[0] ? 'page-item disabled' : 'page-item'
          }
          onClick={currentPage === pages[0] ? '' : handlePrevbtn}
        >
          <span className='page-link'>{'<<'}</span>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        <li
          style={{ cursor: 'pointer' }}
          className={
            currentPage === pages[pages.length - 1]
              ? 'page-item disabled'
              : 'page-item'
          }
          onClick={currentPage === pages[pages.length - 1] ? '' : handleNextbtn}
        >
          <span className='page-link'>{'>>'}</span>
        </li>
      </ul>
    </nav>
  );
  return {
    currentItems,
    pagination,
  };
};
