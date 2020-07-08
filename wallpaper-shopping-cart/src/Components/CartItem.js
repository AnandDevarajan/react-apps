import React from "react";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

const CartItem = ({ product, addItem }) => {
  return (
    <Card className="mt-2 mb-1">
      <CardImg top height="250" width="100%" src={product.smallImage} />
      <CardBody className="text-center">
        <CardTitle>{product.productName}</CardTitle>
        <CardText className="secondary">
          Price: ${product.productPrice}
        </CardText>
        <Button
          color="success"
          onClick={() => {
            addItem(product);
          }}
        >
          Buy
        </Button>
      </CardBody>
    </Card>
  );
};

export default CartItem;
