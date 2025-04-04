import React from "react";
import { Row } from "react-bootstrap";
import Sidebarsearchhook from "../../hook/search/sidebar-search-hook";

const SideFilter = ({theme}) => {
  const [category, brand, clickCategory, clickBrand, priceFrom, priceTo] =
    Sidebarsearchhook();
    let localFrom = "",localTo = ""
  if (localStorage.getItem("priceFrom") != null)
    localFrom = localStorage.getItem("priceFrom");
  if (localStorage.getItem("priceTo") != null)
    localTo = localStorage.getItem("priceTo");
  return (
    <div className="mt-3">
      <Row>
        <div className="d-flex flex-column mt-2">
          <div style={{color: theme.palette.text.primary, fontSize:"18px"}} className="filter-title">catégorie</div>
          <div className="d-flex mt-3">
            <input onChange={clickCategory} type="checkbox" value="0" />
            <div style={{color: theme.palette.text.primary , fontSize:"15px"}} className="filter-sub me-2 ms-3">All</div>
          </div>
          {category ? (
            category.map((item, index) => {
              return (
                <div key={index}  className="d-flex  mt-2">
                  <input
                    onChange={clickCategory}
                    type="checkbox"
                    value={item._id}
                  />
                  <div  style={{color: theme.palette.text.primary , fontSize:"15px"}} className="filter-sub me-2 ms-3 ">{item.name}</div>
                </div>
              );
            })
          ) : (
            <h6>لا يوجد تصنيفات</h6>
          )}
        </div>
        <div className="d-flex flex-column mt-2">
          <div style={{color: theme.palette.text.primary , fontSize:"18px"}} className="filter-title mt-3">brand</div>
          <div className="d-flex mt-3">
            <input onChange={clickBrand} type="checkbox" value="0" />
            <div style={{color: theme.palette.text.primary , fontSize:"15px"}} className="filter-sub me-2 ms-3">All</div>
          </div>
          {brand ? (
            brand.map((item, index) => {
              return (
                <div key={index} className="d-flex mt-2">
                  <input
                    onChange={clickBrand}
                    type="checkbox"
                    value={item._id}
                  />
                  <div style={{color: theme.palette.text.primary , fontSize:"15px"}} className="filter-sub me-2 ms-3">{item.name}</div>
                </div>
              );
            })
          ) : (
            <h6>لا يوجد تصنيفات</h6>
          )}
        </div>

        <div style={{color: theme.palette.text.primary, fontSize:"18px" }} className="filter-title my-3">Price</div>
        <div className="d-flex">
          <p style={{color: theme.palette.text.primary, fontSize:"15px" }}  className="filter-sub my-2">De:</p>
          <input
            value={localFrom}
            onChange={priceFrom}
            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
          />
        </div>
        <div className="d-flex">
          <p style={{color: theme.palette.text.primary, fontSize:"15px" }} className="filter-sub my-2">À:</p>
          <input
            value={localTo}
            onChange={priceTo}
            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
          />
        </div>
      </Row>
    </div>
  );
};

export default SideFilter;
