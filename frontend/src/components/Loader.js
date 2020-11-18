import React from "react";
import { Spinner } from "react-bootstrap";
const Loader = () => {
  return (
    <Spinner
      animation="grow"
      role="status"
      variant="light"
      style={{
        width: "100px",
        height: "100px",
        margin: "12rem auto",
        display: "block",
      }}
    >
      <span className="sr-only">Loading</span>
    </Spinner>
  );
};

export default Loader;
