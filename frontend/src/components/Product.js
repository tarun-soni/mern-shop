import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-2">
      <a href={`product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>
      <Card.Body>
        <a to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as="div">
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
