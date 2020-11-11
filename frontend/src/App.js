import React from "react";
import { Footer, Header } from "./components";
import { Container } from "react-bootstrap";
const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h2>welcome to mern shop</h2>
        </Container>
      </main>

      <Footer />
    </>
  );
};

export default App;
