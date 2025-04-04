import React from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import deleteicon from "../../assets/Image/delete.png";
import editEcon from "../../assets/Image/edit.png";
import DeleteAddressHook from "../../hook/user/delete-address-hook";
import { useTheme } from "@mui/system";
// import { useDispatch } from 'react-redux';
// import { deleteUserAddress } from './../../redux/actions/userAddressesAction';
const UserAddressCard = ({ item }) => {
  const [show, handleClose, handleShow, handelDelete] = DeleteAddressHook(
    item._id
  );
  const theme = useTheme();

  return (
    <div
      style={{ backgroundColor: theme.palette.myColor.main }}
      className="user-address-card my-3 px-2 pb-2"
    >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ backgroundColor: theme.palette.myColor.main }}>
          <Modal.Title >
            {" "}
            <div  style={{ color: theme.palette.text.primary ,backgroundColor: theme.palette.myColor.main }} className="font">
              Confirmation of Deletion
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: theme.palette.myColor.main }}>
          <div style={{ backgroundColor: theme.palette.myColor.main }} className="font">
            Are you sure about the address deletion process?
          </div>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: theme.palette.myColor.main }}>
          <Button
            style={{ backgroundColor: "#F89118"  }}
            className="font"
            variant="success"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            style={{ backgroundColor: "red" }}
            className="font"
            variant="dark"
            onClick={handelDelete}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Row className="d-flex justify-content-between  ">
        <Col xs="6">
          <div className="p-2">{item.alias}</div>
        </Col>
        <Col xs="6" className="d-flex d-flex justify-content-end">
          <div className="d-flex p-2">
            <Link
              to={`/user/edit-address/${item._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="d-flex mx-2">
                <img
                  alt=""
                  className="ms-1 mt-2"
                  src={editEcon}
                  height="17px"
                  width="15px"
                />
                <p style={{color: theme.palette.text.primary}}  className="item-delete-edit"> Update</p>
              </div>
            </Link>
            <div onClick={handleShow} className="d-flex ">
              <img
                alt=""
                className="ms-1 mt-2"
                src={deleteicon}
                height="17px"
                width="15px"
              />
              <p style={{color: theme.palette.text.primary}} className="item-delete-edit"> Delete</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <div
            style={{
              color: theme.palette.text.primary,
              fontFamily: "Almarai",
              fontSize: "14px",
            }}
          >
            {item.details}
          </div>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: theme.palette.text.primary,
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            Phone :
          </div>

          <div
            style={{
              color: theme.palette.text.primary,
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {item.phone}
          </div>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: theme.palette.text.primary,
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            city
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {item.city}
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: theme.palette.text.primary,
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            Bank number
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {item.postalCode}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAddressCard;
