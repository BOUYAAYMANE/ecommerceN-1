import React from "react";
import { Col, Row } from "react-bootstrap";
import MultiImageInput from "react-multiple-image-input";
import { CompactPicker, SketchPicker } from "react-color";
import Multiselect from "multiselect-react-dropdown";
import add from "../../assets/Image/add.png";
import { useParams } from "react-router-dom";
import Editproducthook from "../../hook/product/update-product-hook";
import { ToastContainer } from "react-toastify";
const AdminUpditeProducts = () => {
  const { id } = useParams();
  const [
    category,
    brand,
    setImages,
    images,
    prodName,
    prodDescription,
    priceBefore,
    priceAftr,
    qty,
    colors,
    showColor,
    onSelectSubCategorie,
    onRemoveSubCategorie,
    options,
    onShowColor,
    HundelChangeComplet,
    removeColor,
    onSelectCategory,
    onSelectBrand,
    onChangeProdName,
    onChangeProdDescription,
    onChangePriceBefore,
    onChangepriceAfter,
    onChangeQty,
    handelSubmit,
    catId,
    brandId,
  ] = Editproducthook(id);
  return (
    <div>
       <ToastContainer />
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">
          {" "}
          تعديل المنتج - {prodName}
        </div>
        <Col sm="8">
          <div className="text-form pb-2"> صور للمنتج</div>
          <MultiImageInput
            theme={"light"}
            images={images}
            setImages={setImages}
            // kat desactive crop (9ate3)
            allowCrop={false}
          />
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم المنتج"
            value={prodName}
            onChange={onChangeProdName}
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="وصف المنتج"
            value={prodDescription}
            onChange={onChangeProdDescription}
          />
          <input
            value={priceBefore}
            onChange={onChangePriceBefore}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر قبل الخصم"
          />
          <input
            value={priceAftr}
            onChange={onChangepriceAfter}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر بعد الخصم"
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="الكمية المتاحة"
            value={qty}
            onChange={onChangeQty}
          />
          <select
            onChange={onSelectCategory}
            value={catId}
            name="cat"
            id="lang"
            className="select input-form-area mt-3 px-2 "
          >
            <option value="0">التصنيف الرئيسي</option>
            {category && category.data
              ? category.data.map((item, index) => {
                  return (
                    <option key={index} value={item._id}>
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>

          <Multiselect
            className="mt-2 text-end"
            placeholder="التصنيف الفرعي"
            options={options}
            onSelect={onSelectSubCategorie}
            onRemove={onRemoveSubCategorie}
            displayValue="name"
            style={{ color: "red" }}
          />
          <select
            onChange={onSelectBrand}
            value={brandId}
            name="brand"
            id="brand"
            className="select input-form-area mt-3 px-2 "
          >
            <option value="0">الماركة الرئيسية</option>
            {brand.data
              ? brand.data.map((item, index) => {
                  return (
                    <option key={index} value={item._id}>
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>
          <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
          <div className="mt-1 d-flex">
            {colors != []
              ? colors.map((color, index) => {
                  return (
                    <div
                      onClick={() => removeColor(color)}
                      key={index}
                      className="color ms-2 border  mt-1"
                      style={{ backgroundColor: color }}
                    ></div>
                  );
                })
              : null}

            <img
              src={add}
              alt=""
              width="30px"
              height="35px"
              className=""
              style={{ cursor: "pointer" }}
              onClick={onShowColor}
            />
            {showColor ? (
              <CompactPicker onChangeComplete={HundelChangeComplet} />
            ) : null}
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">
            حفظ التعديلات
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default AdminUpditeProducts;
