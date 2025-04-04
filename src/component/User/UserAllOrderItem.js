import React from "react";
import { Row, Col } from "react-bootstrap";
import mobile from "../../assets/Image/mobile.png";
import UserAllOrderCard from "./UserAllOrderCard";
import { useTheme } from "@mui/system";
const UserAllOrderItem = ({ orderItem }) => {
  const theme = useTheme();

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <div
      style={{ backgroundColor: theme.palette.myColor.main }}
      className="user-order mt-2"
    >
      <Row>
        <div
          style={{ color: theme.palette.text.primary }}
          className="py-2 order-title"
        >
          Order number #{orderItem.id || 0} done on ...{" "}
          {formatDate(orderItem.createdAt)}
        </div>
      </Row>
      {orderItem.cartItems
        ? orderItem.cartItems.map((item, index) => {
            return <UserAllOrderCard key={index} item={item} />;
          })
        : null}

      <Row className="d-flex justify-content-between">
        <Col xs="6" className="d-flex">
          <div>
            <div
              style={{ color: theme.palette.text.primary }}
              className="d-inline"
            >
              {" "}
              Delivery
            </div>
            <div className="d-inline mx-2 stat">
              {orderItem.isDelivered === true ? "Delivered" : "not done "}
            </div>
          </div>
          <div>
            <div className="d-inline"> paying off</div>
            <div className="d-inline mx-2 stat">
              {orderItem.isPaid === true ? "The payment was made" : "not done "}
            </div>
          </div>

          <div>
            <div className="d-inline">Payment method</div>
            <div className="d-inline mx-2 stat">
              {orderItem.paymentMethodType === "cash" ? "cash" : "credit card"}
            </div>
          </div>
        </Col>
        <Col xs="6" className="d-flex justify-content-end">
          <div>
            <div  style={{ color: theme.palette.text.primary }} className="barnd-text">
              {orderItem.totalOrderPrice || 0} dh
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllOrderItem;
