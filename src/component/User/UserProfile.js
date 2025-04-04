import React, { useState } from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import ProfileHook from "../../hook/user/profile-hook";
import deleteicon from "../../assets/Image/edit.png";
import { ToastContainer } from "react-toastify";
import { useTheme } from "@mui/system";

const UserProfile = () => {
  const [
    user,
    show,
    handleClose,
    handleShow,
    handelSubmit,
    name,
    email,
    phone,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    changePassword,
    oldPassword,
    newPassword,
    confirmNewPassword,
    onChangeOldPass,
    onChangeNewPass,
    onChangeConfirmPass,
  ] = ProfileHook();
  const theme = useTheme();

  return (
    <div>
      <div
        style={{ color: theme.palette.text.primary }}
        className="admin-content-text"
      >
        Profile
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ backgroundColor: theme.palette.myColor.main }}>
          <Modal.Title>
            {" "}
            <div
              style={{ backgroundColor: theme.palette.myColor.main }}
              className="font"
            >
              Edit Personal Information.
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: theme.palette.myColor.main }}>
          <input
            style={{
              backgroundColor: theme.palette.myColor.main,
              color: theme.palette.text.primary,
            }}
            value={name}
            onChange={onChangeName}
            type="text"
            className="input-form font d-block mt-3 px-3"
            placeholder="name"
          />
          <input
            style={{
              backgroundColor: theme.palette.myColor.main,
              color: theme.palette.text.primary,
            }}
            value={email}
            onChange={onChangeEmail}
            type="email"
            className="input-form font d-block mt-3 px-3"
            placeholder="email"
          />
          <input
            style={{
              backgroundColor: theme.palette.myColor.main,
              color: theme.palette.text.primary,
            }}
            value={phone}
            onChange={onChangePhone}
            type="phone"
            className="input-form font d-block mt-3 px-3"
            placeholder="phone"
          />
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: theme.palette.myColor.main }}>
          <Button
            style={{ backgroundColor: "#F89118" }}
            className="font"
            variant="success"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            style={{ backgroundColor: "#27CE60" }}
            className="font"
            variant="dark"
            onClick={handelSubmit}
          >
            Save update
          </Button>
        </Modal.Footer>
      </Modal>

      <div
        style={{ backgroundColor: theme.palette.myColor.main }}
        className="user-address-card my-3 px-2"
      >
        <Row className="d-flex justify-content-between pt-2">
          <Col xs="6" className="d-flex">
            <div style={{ color: theme.palette.text.primary }} className="p-2">
              name :
            </div>
            <div
              // style={{ color: theme.palette.text.primary }}
              className="p-1 item-delete-edit"
            >
              {user.name}
            </div>
          </Col>
          <Col xs="6" className="d-flex justify-content-end">
            <div onClick={handleShow} className="d-flex mx-2">
              <img
                alt=""
                className="ms-1 mt-2"
                src={deleteicon}
                height="17px"
                width="15px"
              />
              <p
                style={{ color: theme.palette.text.primary }}
                className="item-delete-edit"
              >
                {" "}
                update
              </p>
            </div>
          </Col>
        </Row>

        <Row className="">
          <Col xs="12" className="d-flex">
            <div style={{ color: theme.palette.text.primary }} className="p-2">
              Phone number :
            </div>
            <div className="p-1 item-delete-edit">{user.phone}</div>
          </Col>
        </Row>
        <Row className="">
          <Col xs="12" className="d-flex">
            <div style={{ color: theme.palette.text.primary }} className="p-2">
              Email :
            </div>
            <div className="p-1 item-delete-edit">{user.email}</div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs="10" sm="8" md="6" className="">
            <div
              style={{ color: theme.palette.text.primary }}
              className="admin-content-text"
            >
              Change Password
            </div>
            <input
              value={oldPassword}
              onChange={onChangeOldPass}
              type="password"
              className="input-form d-block mt-1 px-3"
              placeholder="Enter the old password"
            />
            <input
              value={newPassword}
              onChange={onChangeNewPass}
              type="password"
              className="input-form d-block mt-3 px-3"
              placeholder="Enter the new password"
            />
            <input
              value={confirmNewPassword}
              onChange={onChangeConfirmPass}
              type="password"
              className="input-form d-block mt-3 px-3"
              placeholder="Confirm the new password"
            />
          </Col>
        </Row>

        <Row>
          <Col xs="10" sm="8" md="6" className="d-flex justify-content-end ">
            <button
              style={{
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.button.main,
              }}
              onClick={changePassword}
              className="btn-save d-inline mt-2 "
            >
              Save Password
            </button>
          </Col>
        </Row>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UserProfile;
