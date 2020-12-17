import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Loader, Message, Paginate, Product, SearchBox } from "../components";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

const HomeScreen = ({ match }) => {
  const dispatch = useDispatch();

  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, pages, page } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Row>
        <Col md={8}>
          <h3>Latest Products</h3>
        </Col>
        <Col className="my-3" md={4}>
          {/* normally calling <SearchBox/> will not have access to history hence...  */}
          <Route render={({ history }) => <SearchBox history={history} />} />
        </Col>
      </Row>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products?.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Row>
            <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ""}
            />
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
