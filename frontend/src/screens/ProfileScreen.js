import React, { useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Loader, Message } from "../components";

import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../actions/userActions";
import { Link } from "react-router-dom";

const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  //
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [history, userInfo, dispatch, user]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      // dispatch(updateProfile()));
    }
  };

  return (
    <>
      <Row>
        <Col md={3}>
          <h3>User Profile</h3>
          {message && <Message variant="danger">{message}</Message>}
          {error && <Message variant="danger">{error}</Message>}
          {loading && <Loader />}

          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label className="pt-3">
                <h5>Name </h5>
              </Form.Label>

              <Form.Control
                type="Name"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label className="pt-3">
                <h5>Email Address</h5>
              </Form.Label>

              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>
                <h5>Password</h5>
              </Form.Label>

              <Form.Control
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="confirmPassword">
              <Form.Label>
                <h5>Confirm Password</h5>
              </Form.Label>

              <Form.Control
                type="password"
                placeholder="Retype your Password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </Form.Group>

            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        </Col>
        <Col md={9}>
          <h3>My Orders</h3>
        </Col>
      </Row>
    </>
  );
};

export default ProfileScreen;
