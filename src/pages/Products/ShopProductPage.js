import React from "react";
import SearchCounterResult from "../../component/utilitys/SearchCounterResult";
import SideFilter from "../../component/utilitys/SideFilter";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { PaginationComp } from "../../component/utilitys/PaginationComp";
import ViewSearhProducthook from "../../hook/product/view-search-products-hook";
import { useTheme } from "@mui/material";
import { HeaderAll } from "../../component/header/HeaderAll";
import Main from "../../component/main/main";

export const ShopProductPage = () => {
  const [items, pageCount, getPage, getProduct, results] =
    ViewSearhProducthook();
  const theme = useTheme();
  if (pageCount)
    //console.log(pageCount)
    return (
      <>
        {/* <NavBarLogin /> */}
        <HeaderAll theme={theme} />
        <div style={{ minHeight: "670px" }}>
          <Container>
            {items ? (
              <div>
                <SearchCounterResult
                  theme={theme}
                  onclick={getProduct}
                  title={`There are ${results} search results`}
                />
                <Row className="d-flex flex-row">
                  <Col sm="2" xs="2" md="1" className="d-flex">
                    <SideFilter theme={theme} />
                  </Col>
                  <Col sm="10" xs="10" md="11">
                    <Main products={items} pathText="/Product" />
                  </Col>
                </Row>
              </div>
            ) : null}

            {pageCount > 1 ? (
              <PaginationComp pageCount={pageCount} onPress={getPage} />
            ) : null}
          </Container>
        </div>
      </>
    );
};
