import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ViewProducDetailstHook from "../../hook/product/view-product-details-hook";
import AddToCartHook from "./../../hook/cart/add-to-cart-hook";
import { ToastContainer } from "react-toastify";

const ProductText = ({ theme }) => {
  const { id } = useParams();
  const [item, images, cat, brand] = ViewProducDetailstHook(id);
  // item = data of the specifique product
  const [colorClick, indexColor, addToCartHandel] = AddToCartHook(id, item);

  return (
    <div>
      <Row className="mt-2">
        <div style={{ color: theme.palette.text.primary }} className="cat-text">
          {cat.name} :
        </div>
      </Row>
      <Row>
        <Col md="8" className="ms-5">
          <div
            style={{ color: theme.palette.text.primary }}
            className="cat-title d-inline"
          >
            {item.title}
            <div className="cat-rate d-inline mx-3">{item.ratingsAverage}</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div
            style={{ color: theme.palette.text.primary }}
            className="cat-text d-inline"
          >
            Brand :
          </div>
          <div
            style={{ color: theme.palette.text.primary }}
            className="barnd-text d-inline mx-1"
          >
            {brand.name}{" "}
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          {item.availableColors
            ? item.availableColors.map((color, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => colorClick(index, color)}
                    className="color ms-2"
                    style={{
                      backgroundColor: color,
                      border: indexColor === index ? "3px solid black" : "none",
                    }}
                  ></div>
                );
              })
            : null}
        </Col>
        <div style={{ color: theme.palette.text.primary }} className="cat-text mt-3">
          quantity available : {item.quantity}{" "}
        </div>
      </Row>

      <Row className="mt-4">
        <div style={{ color: theme.palette.text.primary }} className="cat-text">Description :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div style={{ color: theme.palette.text.primary }} className="product-description d-inline">{item.description}</div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          {item.priceAfterDiscount >= 1 ? (
            <div className="product-price d-inline px-3 py-3 border">
              <span style={{ textDecorationLine: "line-through" }}>
                {" "}
                {item.price}
              </span>{" "}
              {item.priceAfterDiscount} dh
            </div>
          ) : (
            <div className="product-price d-inline px-3 py-3 border">
              <span> {item.price}</span> dh{" "}
            </div>
          )}
          <div
            onClick={addToCartHandel}
            className="product-cart-add px-3 py-3 d-inline mx-3"
          >
            Add to Cart
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default ProductText;
