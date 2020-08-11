import React from "react";
import ProductList from "./ProductList";
import { ProductContext } from "../../context/products";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

export default function PageProducts() {
  const { sorted, page, changePage } = React.useContext(ProductContext);
  if (sorted[page]) {
    <section>
      return <ProductList products={sorted[page]}></ProductList>;
      {sorted.length > 1 && (
        <article className="pagination-buttons">
          {page > 0 && (
            <button
              onClick={() => {
                changePage(page - 1);
              }}
              className="prev-page-btn"
            >
              <FaAngleDoubleLeft></FaAngleDoubleLeft>
            </button>
          )}
          {sorted.map((_, index) => {
            return (
              <button
                onClick={() => changePage(index)}
                key={index}
                className={`page-btn ${page === index && `page-btn-current`}`}  //if page matches index then it is a current page and will be highlighted.
              >
                {index + 1}
              </button>
            );
          })}
          {page < sorted.length - 1 && (
            <button onClick={() => changePage(page + 1)} className="next-page-btn">
              <FaAngleDoubleRight></FaAngleDoubleRight>
            </button>
          )}
        </article>
      )}
    </section>;
  } else {
    return (
      <h3 className="search-errors">
        unfortunately your search query did not return any products
      </h3>
    );
  }
}
