import React, { useState, useEffect } from "react";
import Axios from "axios";
import { random, commerce } from "faker";
import { Container, Col, Row } from "reactstrap";
import CartItem from "./CartItem";

const apiKey = process.env.REACT_APP_APP_KEY;

const url = "http://api.pexels.com/v1/search?query=wallpaper&per_page=6&page=1";

const BuySection = ({ addItem }) => {
  const [product, setProduct] = useState([]);
  const fetchPhotos = async () => {
    const { data } = await Axios.get(url, {
      headers: {
        authorization: apiKey,
      },
    });
    const { photos } = data;
    const allProduct = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: random.word(),
      productPrice: commerce.price(),
      id: random.uuid(),
    }));
    setProduct(allProduct);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <h1 className="text-success text-centeer">WALLPAPER SHOWROOM</h1>
      <Row>
        {product.map((product) => (
          <Col md={4} key={product.id}>
            <CartItem product={product} addItem={addItem} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuySection;
