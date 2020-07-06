import React from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  CardHeader,
  CardBody,
  Card,
  CardFooter,
  Col,
  Row,
} from "reactstrap";

const Cart = ({ cartItem, removeItem, buyNow }) => {
  let amount = 0;
  cartItem.forEach((item) => {
    amount = parseFloat(amount) + parseFloat(item.productPrice);
  });
  return (
    <Container fluid>
      <h1 className="text-success">Cart Section</h1>
      <ListGroup>
        {cartItem.map((item) => (
          <ListGroupItem key={item.id}>
            <Row>
              <Col>
                <img height={80} src={item.tinyImage} alt="" />
              </Col>
              <Col className="text-center">
                <div className="text-primary">{item.productName}</div>
                <span className="mr-3">price:={item.productPrice}</span>
                <Button color="danger" onClick={() => removeItem(item)}>
                  Remove
                </Button>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
      {cartItem.length >= 1 ? (
        <Card className="text-center mt-3">
          <CardHeader>Summary</CardHeader>
          <CardBody>
            Quantity - {cartItem.length}
            <br />
            Total Amount - $ {amount}
          </CardBody>
          <CardFooter>
            <Button color="success" onClick={buyNow}>
              Purchase
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <h1 className="text-warning">Cart Empty</h1>
      )}
    </Container>
  );
};

export default Cart;
