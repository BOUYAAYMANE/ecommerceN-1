import React from "react";
import { Row, Col } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import AddAddressHook from "../../hook/user/add-address-hook";

const UserAddAddress = () => {
  const [
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
    onSubmit,
    
  ] = AddAddressHook();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-2">اضافة عنوان جديد</div>
        <Col sm="8">
          <input
            value={alias}
            onChange={onChangeAlias}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="تسمية العنوان مثلا(المنزل - العمل)"
          />
          <textarea
            value={detalis}
            onChange={onChangeDetalis}
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="العنوان بالتفصيل"
          />
          <input
            value={phone}
            onChange={onChangePhone}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="رقم الهاتف"
          />
          <input
            value={city}
            onChange={onChangeCity}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="المدينة"
          />
          <input
           value={codePostal}
            onChange={onChangeCodePostal}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="رقم البانكي"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={onSubmit} className="btn-save d-inline mt-2 ">
            اضافة عنوان
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default UserAddAddress;
