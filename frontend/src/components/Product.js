import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Rating } from "./";

const Product = ({ product }) => {
  return (
    <Card className="my-2" style={{ textColor: "white" }}>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" style={{ color: "#f0f0f0" }}>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div" className="d-flex justify-content-between">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reiews`}
          />
        </Card.Text>

        <Card.Text as="h4">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
