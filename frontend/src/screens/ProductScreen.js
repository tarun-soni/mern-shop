import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader, Message, Rating } from "../components";
import {
  Button,
  Card,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productAction";

const ProductScreen = ({ match }) => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);
  return (
    <>
      <Link to="/" className="btn btn-light my-3 ">
        <i className="fas fa-arrow-left mr-2" aria-hidden="true"></i>
        Back
      </Link>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} fluid />
          </Col>

          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h3>{product.name}</h3>
              </ListGroupItem>
              <ListGroupItem>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reiews`}
                />
              </ListGroupItem>
              <ListGroupItem>Price : {product.price}</ListGroupItem>
              <ListGroupItem>Description: {product.description}</ListGroupItem>
            </ListGroup>
          </Col>

          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                {/* price */}

                <ListGroupItem>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong style={{ letterSpacing: "0.4rem" }}>
                        ${product.price}
                      </strong>
                    </Col>
                  </Row>
                </ListGroupItem>

                <ListGroupItem>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out of stock"}
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Button
                    className="btn-block"
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    Add to Cart
                  </Button>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
