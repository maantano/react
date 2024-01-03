import React from "react";
import { Link } from "react-router-dom";

const PRODUCT = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

const Products = () => {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        {PRODUCT.map((item) => {
          return (
            <li key={item.id}>
              <Link to={item.id}>{item.title}</Link>
            </li>
          );
        })}
        {/* <li>
          <Link to="/products/product-1"> Product 1</Link>
        </li>
        <li>
          <Link to="/products/product-2">Product 2</Link>
        </li>
        <li>
          <Link> Product 3</Link>
        </li> */}
      </ul>
    </>
  );
};

export default Products;
