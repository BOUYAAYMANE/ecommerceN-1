import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import { useParams } from "react-router-dom";
import CardProductContainer from "../../component/Products/CardProductContainer";
import { PaginationComp } from "../../component/utilitys/PaginationComp";
import ViewAllProductsBrandHook from "./../../hook/product/view-all-products-barnd-hook";
import { NavBarLogin } from "../../component/utilitys/NavBarLogin";

const ProductsByBrand = () => {
  const { id } = useParams();

  const [items, pagination, onPress] = ViewAllProductsBrandHook(id);
  if (pagination) {
    var pageCount = pagination;
  } else {
    pageCount = 0;
  }

  return (
    <>
      <NavBarLogin />

    <div style={{ minHeight: "670px" }}>
      <Container>
        <Row className="d-flex flex-row">
          <Col sm="12">
            <CardProductContainer products={items} title="" btntitle="" />
          </Col>
        </Row>
        {pageCount > 1 ?? (
          <PaginationComp pageCount={pageCount} onPress={onPress} />
        )}
      </Container>
    </div>
    </>
  );
};

export default ProductsByBrand;
