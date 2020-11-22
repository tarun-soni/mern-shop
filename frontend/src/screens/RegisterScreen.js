import React, { useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { FormContainer, Loader, Message } from "../components";

import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import { Link } from "react-router-dom";

const RegisterScreen = ({ location, history }) => {
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);

  const { loading, error, userInfo } = userRegister;

  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <>
      <FormContainer>
        <h3>Sign-Up</h3>
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
            Register
          </Button>
        </Form>

        <Row className="py-1">
          <Col>
            Have an account?
            <Link
              className="px-2"
              to={redirect ? `/login?redirect=${redirect}` : `/login`}
            >
              Login
            </Link>
          </Col>
        </Row>
      </FormContainer>
    </>
  );
};

export default RegisterScreen;
