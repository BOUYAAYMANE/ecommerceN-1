import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { BrandCard } from "./BrandCard";
import { Subtitle } from "../utilitys/Subtitle";

import { HomeBrandHook } from "../../hook/brand/home-brand-hook";

export const BrandFeature = ({ title, btntitle }) => {
  const [Brand, loading] = HomeBrandHook();

  return (
    <Container style={{maxWidth:"1150px"}}>
      <Subtitle title={title} btntitle={btntitle} pathText="/AllBrand" />
      <Row className="my-1 d-flex justify-content-between">
        {loading === false ? (
          Brand && Brand.data.length > 0 ? (
            Brand.data.slice(0, 5).map((item, index) => {
              return <BrandCard id={item._id} key={index} img={item.image} />;
            })
          ) : (
            <h6>لا يوجد مركات</h6>
          )
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </Row>
    </Container>
  );
};
