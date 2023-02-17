import React from "react";
import { Link } from "react-router-dom";
const Product = () => {
  return (
    <div>
      <p>products</p>
      <Link to="/layout" className="underline">
        Go Home
      </Link>
    </div>
  );
};
export default Product;
