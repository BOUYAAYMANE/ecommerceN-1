import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { Addcategoryhook } from "../../hook/category/add-category-hook";
import { ToastContainer } from "react-toastify";

const AdminAddCategory = () => {
  
const [img,name,handelSubmit,onImageChange,loadingS,IsPress,onChangeName] = Addcategoryhook()
  

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
        <Col sm="8">
          <div className="text-form pb-2">صوره التصنيف</div>
          {/* label and input type file pour ajout de image */}
          <div>
            <label for="upload-photo">
              <img
                src={img}
                alt="ss"
                height="100px"
                width="120px"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              name="photo"
              onChange={onImageChange}
              id="upload-photo"
            />
          </div>

          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف"
            onChange={onChangeName}
            value={name}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">
            حفظ التعديلات
          </button>
          {/* <input type="button" onClick={()=>console.log("555")}>hrrrrr</input> */}
        </Col>
      </Row>
      {
        //si loadingS === false => null
        IsPress ? loadingS ?  <Spinner animation="border" variant="primary" /> : <h4>avec success</h4> : null
      }
      <ToastContainer />
    </div>
  );
};

// 12
export default AdminAddCategory;
