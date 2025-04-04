import React from "react";
import { Container, Row } from "react-bootstrap";
import { Subtitle } from "../utilitys/Subtitle";
import { ProductCard } from "./ProductCard";
import CardContainerHook from "../../hook/product/card-container-hook";

const CardProductContainer = ({ title, btntitle, pathText, products }) => {
  // kan activiw/affichiw les product favo (wishlist)
  const [favProd] = CardContainerHook();
  return (
    <Container>
      {products ? (
        <Subtitle title={title} btntitle={btntitle} pathText={pathText} />
      ) : null}
      <Row className="my-2 justify-content-between">
        {products
          ? products.map((items, index) => {
              return (
                <ProductCard product={items} favProd={favProd} key={index} />
              );
            })
          : null}
      </Row>
    </Container>
  );
};

export default CardProductContainer;
