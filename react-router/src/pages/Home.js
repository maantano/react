import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("products");
  };
  return (
    <>
      <h1>Home</h1>
      <Link to="products">
        <p>go to products</p>
      </Link>
      <button onClick={navigateHandler}>navigateHandler</button>
    </>
  );
};

export default Home;
