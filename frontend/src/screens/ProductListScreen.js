import React, { useEffect, useState } from "react";
import { Button, Table, Row, Col } from "react-bootstrap";
import { Loader, Message } from "../components";

import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, listProducts } from "../actions/productAction";
import { LinkContainer } from "react-router-bootstrap";

const ProductListScreen = ({ match, history }) => {
  const dispatch = useDispatch();
  const [readMore, setReadMore] = useState(true);

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
    } else {
      history.push("/login");
    }
  }, [userInfo, dispatch, history, successDelete]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteProduct(id));
    }
  };
  const createProductHandler = () => {
    if (window.confirm("Are you sure?")) {
      //dipatch the create product
    }
  };

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h3>Products</h3>
        </Col>
        <Col className="text-right">
          <Button className="my-3" onClick={createProductHandler}>
            <i className="fas fa-plus"></i> Create Product
          </Button>
        </Col>
      </Row>

      {loadingDelete && <Loader />}
      {errorDelete && <Message variant="danget">{error}</Message>}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead className="text-center">
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="text-center">
                <td onClick={() => setReadMore(!readMore)}>
                  {/* <td> */}

                  {readMore ? product._id.substring(0, 7) : product._id}
                  {readMore && " . . . "}
                </td>
                <td>{product.name}</td>
                <td className="lspace-small"> ${product.price} </td>

                <td>{product.category}</td>

                <td>{product.brand}</td>
                <td>
                  <LinkContainer to={`/admin/product/${product._id}/edit`}>
                    <Button className="btn-sm" variant="light">
                      <i className="fas fa-edit"></i>{" "}
                    </Button>
                  </LinkContainer>
                  <Button
                    className="btn-sm"
                    variant="danger"
                    onClick={() => {
                      deleteHandler(product._id);
                    }}
                  >
                    <i className="fas fa-trash"></i>{" "}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default ProductListScreen;
