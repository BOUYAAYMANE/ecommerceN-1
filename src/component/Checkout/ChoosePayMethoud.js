import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import ViewAddressesHook from "./../../hook/user/view-addresses-hook";
import OrderPayCashHook from "./../../hook/checkout/order-pay-cash-hook";
import { ToastContainer } from "react-toastify";
import OrderPayCardHook from "./../../hook/checkout/order-pay-card-hook";
import GetAllUserCartHook from "./../../hook/cart/get-all-user-cart-hook";
import notify from "../utilitys/ToastNotify";
import { useTheme } from "@mui/system";

const ChoosePayMethoud = () => {
  const theme = useTheme();
  const [response] = ViewAddressesHook();
  const [handelChooseAddress, addressDetalis, handelCreateOrderCash] =
    OrderPayCashHook();
  const [handelCreateOrderCARD] = OrderPayCardHook(addressDetalis);
  const [, , totalCartPrice, , totalCartPriceAfterDiscount] =
    GetAllUserCartHook();

  const [type, setType] = useState("");
  const changeMathoud = (e) => {
    setType(e.target.value);
  };
  // pour card : darory thet lback end f serveur a distance not localHost
  const handelPay = () => {
    if (type === "CARD") {
      console.log("order card");
      handelCreateOrderCARD();
    } else if (type === "CASH") {
      console.log("order cash");
      handelCreateOrderCash();
    } else {
      notify("من فضلك اختر طريقة دفع", "warning");
    }
  };

  return (
    <div>
      <div
        style={{ color: theme.palette.text.primary }}
        className="admin-content-text pt-5"
      >
        Choose the payment method
      </div>
      <div
        style={{ backgroundColor: theme.palette.myColor.main }}
        className="user-address-card my-3 px-3"
      >
        <Row className="d-flex justify-content-between ">
          <Col xs="12" className="my-2">
            <input
              onChange={changeMathoud}
              style={{ cursor: "pointer" }}
              name="group"
              id="group1"
              type="radio"
              value="CARD"
              className="mt-2"
            />
            <label style={{ cursor: "pointer" }} className="mx-2" for="group1">
              Payment by Credit Card
            </label>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col xs="12" className="d-flex">
            <input
              style={{ cursor: "pointer" }}
              onChange={changeMathoud}
              name="group"
              id="group2"
              type="radio"
              value="CASH"
              className="mt-2"
            />
            <label style={{ cursor: "pointer" }} className="mx-2" for="group2">
              Cash on Delivery
            </label>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col xs="4" className="d-flex">
            <select
              name="address"
              id="address"
              className="select mt-1 px-2 "
              onChange={handelChooseAddress}
            >
              <option value="0">Please select a shipping address</option>
              {response ? (
                response.map((item, index) => {
                  return (
                    <option key={item._id} value={item._id}>
                      {item.alias}
                    </option>
                  );
                })
              ) : (
                <option key={0} value={0}>
                  There are no registered addresses.
                </option>
              )}
            </select>
          </Col>
        </Row>
      </div>

      <Row>
        <Col xs="12" className="d-flex justify-content-end">
          <div className="product-price d-inline   border">
            {totalCartPriceAfterDiscount >= 1
              ? `${totalCartPrice} dh ... After discount${totalCartPriceAfterDiscount} `
              : `${totalCartPrice} dh`}
          </div>
          <div
            onClick={handelPay}
            className="product-cart-add px-3 pt-2 d-inline ms-2 me-2"
          >
            {" "}
            Complete Purchase
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default ChoosePayMethoud;
