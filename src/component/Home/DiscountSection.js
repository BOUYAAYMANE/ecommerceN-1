import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import laptops from "../../assets/Image/laptops.png";

export const DiscountSection = () => {
  return (
    <Container>
      <Row className="discount-backcolor my-3  mx-2 d-flex text-center align-items-center">
        <Col sm="6">
          <div className="discount-title">
            خصم يصل حتي ٣٠٪ علي اجهازه اللاب توب
          </div>
        </Col>
        <Col sm="6">
          <img className="dicount-img" src={laptops} alt="" />
        </Col>
      </Row>
    </Container>  
  );
};
