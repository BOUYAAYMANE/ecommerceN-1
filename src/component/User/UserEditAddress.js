import React from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import EditAddressHook from "./../../hook/user/edit-address-hook";
import { ToastContainer } from "react-toastify";
import { useTheme } from "@mui/system";

const UserEditAddress = () => {
  const { id } = useParams();
  const [
    handelEdit,
    alias,
    detalis,
    phone,
    city,
    codePostal,
    onChangeAlias,
    onChangeDetalis,
    onChangePhone,
    onChangeCity,
    onChangeCodePostal,
  ] = EditAddressHook(id);
  const theme = useTheme();

  return (
    <div>
      <Row className="justify-content-start ">
        <div
          style={{ color: theme.palette.text.primary }}
          className="admin-content-text pb-2"
        >
          Update address{" "}
        </div>
        <Col sm="8">
          <input
            value={alias}
            onChange={onChangeAlias}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Name the address, for example (home - work)"
          />
          <textarea
            value={detalis}
            onChange={onChangeDetalis}
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="Detailed address"
          />
          <input
            value={phone}
            onChange={onChangePhone}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Phone number"
          />
          <input
            value={city}
            onChange={onChangeCity}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="City"
          />
          <input
            value={codePostal}
            onChange={onChangeCodePostal}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Bank number"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button
            style={{
              color: theme.palette.text.primary,
              backgroundColor: theme.palette.button.main,
            }}
            onClick={handelEdit}
            className="btn-save d-inline mt-2 "
          >
            Save
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default UserEditAddress;
