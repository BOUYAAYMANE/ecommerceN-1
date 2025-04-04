import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import GetAllUserCartHook from "./../../hook/cart/get-all-user-cart-hook";
import CartItem from "../../component/Cart/CartItem";
import CartCheckout from "../../component/Cart/CartCheckout";
import { NavBarLogin } from "../../component/utilitys/NavBarLogin";
import { useTheme } from "@mui/system";
import { HeaderAll } from "../../component/header/HeaderAll";
const CartPage = () => {
  const [
    itemsNum,
    cartItems,
    totalCartPrice,
    couponNameRes,
    totalCartPriceAfterDiscount,
  ] = GetAllUserCartHook();
  const theme = useTheme();

  return (
    <>
      {/* <NavBarLogin /> */}
      <HeaderAll theme={theme} />

      <Container style={{ minHeight: "670px" }}>
        <Row>
          <div
            style={{ color: theme.palette.text.primary }}
            className="cart-title mt-4"
          >
            shopping cart
          </div>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col xs="12" md="9">
            {cartItems.length >= 1 ? (
              cartItems.map((item, index) => {
                return <CartItem key={index} item={item} />;
              })
            ) : (
              <h6>There are no products in the cart</h6>
            )}
          </Col>

          <Col xs="6" md="3">
            <CartCheckout
              cartItems={cartItems}
              couponNameRes={couponNameRes}
              totalCartPriceAfterDiscount={totalCartPriceAfterDiscount}
              totalCartPrice={totalCartPrice}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CartPage;
