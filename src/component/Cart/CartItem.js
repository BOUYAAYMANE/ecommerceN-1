import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import mobile from "../../assets/Image/mobile.png";
import deleteicon from "../../assets/Image/delete.png";
import DeleteCartHook from "../../hook/cart/delete-cart-hook";
import { useTheme } from "@mui/system";
const CartItem = ({ item }) => {
  const [
    handelDeleteCart,
    show,
    handleClose,
    handleShow,
    handelDeleteItem,
    itemCount,
    onChangeCount,
    handeleUpdateCart,
  ] = DeleteCartHook(item);
  const theme = useTheme();

  return (
    <Col
      style={{ backgroundColor: theme.palette.myColor.main }}
      xs="12"
      className="cart-item-body my-2 d-flex px-2"
    >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ backgroundColor: theme.palette.myColor.main }}>
          <Modal.Title>
            {" "}
            <div
              style={{ backgroundColor: theme.palette.myColor.main }}
              className="font"
            >
              Confirmation of Deletion
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: theme.palette.myColor.main }}>
          <div
            style={{ backgroundColor: theme.palette.myColor.main }}
            className="font"
          >
            Are you sure you want to delete the product from the cart?
          </div>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: theme.palette.myColor.main }}>
          <Button
            style={{ backgroundColor: "green" }}
            className="font"
            variant="success"
            onClick={handleClose}
          >
            Retreat
          </Button>
          <Button
            style={{ backgroundColor: "red" }}
            className="font"
            variant="dark"
            onClick={handelDeleteItem}
          >
            delete
          </Button>
        </Modal.Footer>
      </Modal>

      <img
        width="160px"
        height="197px"
        src={
          `http://127.0.0.1:8000/products/${item.product.imageCover}` || mobile
        }
        alt=""
      />
      <div className="w-100">
        <Row className="justify-content-between">
          <Col sm="12" className=" d-flex flex-row justify-content-between">
            <div
              style={{ color: theme.palette.text.primary }}
              className="d-inline pt-2  ms-3 cat-text"
            >
              {item.product.category.name || ""}
            </div>
            <div
              onClick={handleShow}
              className="d-flex pt-2 "
              style={{ cursor: "pointer" }}
            >
              <img src={deleteicon} alt="" width="20px" height="24px" />
              <div
                style={{ color: theme.palette.text.primary }}
                className="cat-text d-inline me-2"
              >
                Remove
              </div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-2">
          <Col sm="12" className=" d-flex flex-row justify-content-start">
            <div
              style={{ color: theme.palette.text.primary }}
              className="d-inline pt-2  ms-3 cat-title"
            >
              {item.product.title || ""}
            </div>
            <div className="d-inline pt-2  ms-2 cat-rate me-2">
              {item.product.ratingsAverage || 0}
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1">
            <div
              style={{ color: theme.palette.text.primary }}
              className="cat-text d-inline  ms-3"
            >
              brand :
            </div>
            <div
              style={{ color: theme.palette.text.primary }}
              className="barnd-text d-inline mx-1"
            >
              {item.product.brand ? item.product.brand.name : ""}{" "}
              {/* {item.product.brand.name || ""}{" "} */}
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1 d-flex">
            {item.color === "" ? null : (
              <div
                className="color ms-3 border"
                style={{ backgroundColor: `${item.color}` }}
              ></div>
            )}
          </Col>
        </Row>

        <Row className="justify-content-between">
          <Col sm="12" className=" d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 d-flex">
              <div
                style={{ color: theme.palette.text.primary }}
                className="cat-text mt-2 ms-3  d-inline"
              >
                Quantite
              </div>
              <input
                value={itemCount}
                onChange={onChangeCount}
                className="mx-2 text-center"
                type="number"
                style={{ width: "60px", height: "40px" }}
              />
              <Button onClick={handeleUpdateCart} className="btn btn-dark">
                Apply
              </Button>
            </div>
            <div style={{ color: theme.palette.text.primary }} className="d-inline pt-2 barnd-text">{item.price || 0} dh</div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default CartItem;
