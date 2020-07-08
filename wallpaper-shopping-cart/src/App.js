import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import BuySection from "./Components/BuySection";
import Cart from "./Components/Cart";
import "./App.css";
function App() {
  const [cartItem, setCartItem] = useState([]);

  const addItem = (item) => {
    const isAdded = cartItem.findIndex(function (array) {
      return array.id === item.id;
    });
    if (isAdded !== -1) {
      return toast("Already added in cart", {
        type: "error",
      });
    }
    setCartItem([...cartItem, item]);
  };

  const buyNow = () => {
    setCartItem([]);
    toast("Purchase Completed", {
      type: "success",
    });
  };
  const removeItem = (item) => {
    setCartItem(cartItem.filter((singleItem) => singleItem.id !== item.id));
  };

  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md="8">
          <BuySection addItem={addItem} />
        </Col>
        <Col md="4">
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
