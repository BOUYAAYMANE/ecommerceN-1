import React from "react";
import { Container, Row } from "react-bootstrap";
import { Subtitle } from "../utilitys/Subtitle";
import CardContainerHook from "../../hook/product/card-container-hook";
import { ProductCardFavorite } from './ProductCardFavorite';

const CardProductContainerFavorite = ({ title, btntitle, pathText, products }) => {
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
                <ProductCardFavorite product={items} favProd={favProd} key={index} />
              );
            })
          : null}
      </Row>
    </Container>
  );
};

export default CardProductContainerFavorite;
