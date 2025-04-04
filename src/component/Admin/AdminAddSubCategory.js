import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";

import { ToastContainer } from "react-toastify";
import { Addsubcategoryhook } from "../../hook/subCategory/add-subcategory-hook";
const AdminAddSubCategory = () => {
  const [
    name,
    loading,
    category,
    IsPress,
    onChangeName,
    onhandelChange,
    hundelSubmite,
  ] = Addsubcategoryhook();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</div>
        <Col sm="8">
          <input
            value={name}
            onChange={onChangeName}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف الفرعي"
          />
          <select
            name="categoy"
            id="cat"
            className="select mt-3 px-2 "
            onChange={onhandelChange}
          >
            <option value="0">اضف التصنيف الرئيسي</option>
            {category.data && category.data.map
              ? category.data.map((item, index) => {
                  return (
                    <option key={index} value={item._id}>
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={hundelSubmite} className="btn-save d-inline mt-2 ">
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      {
        //si loadingS === false => null
        IsPress ? (
          loading ? (
            <Spinner animation="border" variant="primary" />
          ) : (
            <h4>avec success</h4>
          )
        ) : null
      }
      <ToastContainer />
    </div>
  );
};

export default AdminAddSubCategory;
