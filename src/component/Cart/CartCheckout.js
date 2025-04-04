import React, { useEffect } from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DeleteCartHook from "./../../hook/cart/delete-cart-hook";
import { ToastContainer, toast } from "react-toastify";
import ApplayCouponHook from "./../../hook/cart/applay-coupon-hook";
import { useTheme } from "@mui/system";

const CartCheckout = ({
  cartItems,
  totalCartPrice,
  totalCartPriceAfterDiscount,
  couponNameRes,
}) => {
  const [
    handelDeleteCart,
    show,
    handleClose,
    handleShow,
    handelDeleteItem,
    itemCount,
    onChangeCount,
    handeleUpdateCart,
    handleClearShow,
    handleClearClose,
    showC,
  ] = DeleteCartHook();
  const theme = useTheme();

  const [couponName, onChangeCoupon, handelSubmitCoupon, handelCheckout] =
    ApplayCouponHook(cartItems);
  useEffect(() => {
    if (couponNameRes) {
      onChangeCoupon(couponNameRes);
    }
  }, [couponNameRes]);
  return (
    <Row style={{ backgroundColor: theme.palette.myColor.main }} className="my-1 d-flex justify-content-center cart-checkout pt-3">
      <Modal show={showC} onHide={handleClearClose}>
        <Modal.Header>
          <Modal.Title>
            {" "}
            <div className="font">Confirmation of Deletion</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font">
            Are you sure you want to delete the product from the cart?
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={handleClearClose}>
            Cancel
          </Button>
          <Button className="font" variant="dark" onClick={handelDeleteCart}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Col xs="12" className="d-flex  flex-column  ">
        <div className="d-flex  ">
          <input
            value={couponName}
            onChange={(e) => onChangeCoupon(e.target.value)}
            className="copon-input d-inline text-center "
            placeholder="Discount Code"
          />
          <button onClick={handelSubmitCoupon} className="copon-btn d-inline ">
            Apply
          </button>
        </div>
        <div className="product-price d-inline w-100 my-3  border">
          {totalCartPriceAfterDiscount >= 1
            ? `${totalCartPrice} dh ...  After Discount ${totalCartPriceAfterDiscount} `
            : `${totalCartPrice} dh`}
        </div>
        <button
        style={{ backgroundColor:theme.palette.button.main}}
          className="product-cart-add  d-inline "
          onClick={handelCheckout}
        >
          {" "}
          Checkout
        </button>
       
        <button
        style={{ backgroundColor:theme.palette.button.main}}

          onClick={handleClearShow}
          className="product-cart-add w-100 px-2 my-1"
        >
          {" "}
          Clear Cart
        </button>
      </Col>
      <ToastContainer />
    </Row>
  );
};

export default CartCheckout;
