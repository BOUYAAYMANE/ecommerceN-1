import { color, useTheme } from "@mui/system";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminAllOrdersItem = ({ orderItem }) => {
  const theme = useTheme();

  return (
    <Col>
      <Link
        to={`/admin/orders/${orderItem._id}`}
        className="cart-item-body-admin my-2 px-1  d-flex px-2 "
        style={{
          textDecoration: "none",
          backgroundColor: theme.palette.myColor.main,
          // width: "100%",
          height: "90%",
        }}
      >
        <div>
          <Row className="justify-content-between">
            <Col sm="12" className="d-flex flex-row justify-content-between">
              <div
                style={{ color: theme.palette.text.primary }}
                className="d-inline pt-2 cat-text"
              >
                Order # {orderItem.id}
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mt-2">
            <Col sm="12" className="d-flex flex-row justify-content-start">
              <div className="d-inline pt-2 cat-title me-sm-5">
                Ordered by: {orderItem.user.name || ""}
              </div>
              <div
                style={{ color: theme.palette.text.primary }}
                className="d-inline pt-2 cat-rate me-2"
              >
                {orderItem.user.email || ""}
              </div>
            </Col>
          </Row>

          <Row className="d-flex justify-content-between">
            <Col sm="10" lg="10" className="d-flex">
              <div>
                <div
                  style={{
                    color: theme.palette.text.primary,
                    fontSize: "14px",
                  }}
                  className="d-inline"
                >
                  Delivery
                </div>
                <div className="d-inline mx-2 stat">
                  {orderItem.isDelivered === true
                    ? "Delivered"
                    : "Not delivered"}
                </div>
              </div>
              <div>
                <div
                  style={{ color: theme.palette.text.primary }}
                  className="d-inline"
                >
                  Payment
                </div>
                <div className="d-inline mx-2 stat">
                  {orderItem.isPaid === true ? "Paid" : "Not paid"}
                </div>
              </div>

              <div>
                <div
                  style={{
                    color: theme.palette.text.primary,
                    fontSize: "15px",
                  }}
                  className="d-inline"
                >
                  Payment Method
                </div>
                <div
                  style={{ fontSize: "15px" }}
                  className="d-inline mx-2 stat"
                >
                  {orderItem.paymentMethodType === "cash"
                    ? "Cash"
                    : "Credit Card"}
                </div>
              </div>
            </Col>
            <Col xs="2" className="d-flex justify-content-end">
              <div>
                <div
                  style={{
                    color: theme.palette.text.primary,
                    fontSize: "14px",
                  }}
                  className="barnd-text"
                >
                  {orderItem.totalOrderPrice || 0} dh
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Link>
    </Col>
  );
};

export default AdminAllOrdersItem;
