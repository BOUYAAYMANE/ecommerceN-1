import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { BrandCard } from "./BrandCard";

export const BrandContainer = ({ loading, data }) => {
  return (
    <Container>
      <div className="admin-content-text mt-2 ">كل المركات</div>
      <Row className="my-2 d-flex justify-content-between">
        {loading === false ? (
          data ? (
            data.map((item, index) => {
              return <BrandCard key={index} img={item.image} id={item._id} />;
            })
          ) : (
            <h4>لا يوجد مركات</h4>
          )
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </Row>
    </Container>
  );
};
