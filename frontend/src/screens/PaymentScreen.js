import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { CheckoutSteps, FormContainer } from "../components";

import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../actions/cartAction";

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/shipping");
  }

  const [paymentMethod, setPayementMethod] = useState("Paypal");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  return (
    <FormContainer>
      <Row>
        <CheckoutSteps step1 step2 step3 />
      </Row>
      <h3>Payment Method</h3>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>

          <Col>
            <Form.Check
              type="radio"
              label="Paypal or Credit card"
              name="paymentMethod"
              value="Paypal"
              checked
              onChange={(e) => {
                setPayementMethod(e.target.value);
              }}
            ></Form.Check>

            {/* <Form.Check
              type="radio"
              label="Stripe"
              name="paymentMethod"
              value="Stripe"
              checked
              onChange={(e) => {
                setPayementMethod(e.target.value);
              }}
            ></Form.Check> */}
          </Col>
        </Form.Group>

        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
