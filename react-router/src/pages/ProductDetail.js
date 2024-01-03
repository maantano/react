import React from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
      <button>
        <Link to={".."} relative="path">
          back
        </Link>
      </button>
    </>
  );
};

export default ProductDetail;
