import React from "react";
import { Footer, Header } from "./components";
import { Container } from "react-bootstrap";
import { HomeScreen, ProductScreen } from "./screens";
import { BrowserRouter as Router, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/product/:id" component={ProductScreen} />
        </Container>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
