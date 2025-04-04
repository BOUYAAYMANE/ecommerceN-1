import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductGallery from "./ProductGallery";
import ProductText from "./ProductText";
import { useTheme } from "@mui/material";

const ProductDetails = () => {
  const theme = useTheme();

  return (
    <div>
      <Row className="py-3">
        <Col lg={4} xs={12}>
          <ProductGallery />
        </Col>
        <Col lg={8} xs={12}>
          <ProductText  theme={theme}/>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
