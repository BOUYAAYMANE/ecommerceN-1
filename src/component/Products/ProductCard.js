import React from "react";
import { Card, Col } from "react-bootstrap";
import prod1 from "../../assets/Image/prod1.png";
import favoff from "../../assets/Image/fav-off.png";
import rate from "../../assets/Image/rate.png";
import { Link } from "react-router-dom";
import ProductCardHook from "../../hook/product/product-card-hook";
import { useTheme } from "@mui/system";
export const ProductCard = ({ product, favProd }) => {
  const [removeToWishListData, addToWishListData, handelFav, favImg, user] =
    ProductCardHook(product, favProd);
  const theme = useTheme();

  return (
    <Col  xs="6" sm="6" md="4" lg="3" className="d-flex">
      <Card 
        className="my-2"
        style={{
          width: "100%",
          height: "345px",
          borderRadius: "8px",
          border: "none",
          // style={{ backgroundColor: theme.palette.myColor.main }}
          backgroundColor: theme.palette.myColor.main,
          boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
        }}
      >
        <Link to={`/Product/${product._id}`} style={{ textDecoration: "none" }}>
          <Card.Img
            style={{  height: "228px", width: "100%" }}
            src={product.imageCover}
          />
        </Link>
        {user ? (
          <div className="d-flex justify-content-end mx-2">
            <img
              src={favImg}
              onClick={handelFav}
              alt=""
              className="text-center"
              style={{
                height: "24px",
                width: "26px",
                cursor: "pointer",
              }}
            />
          </div>
        ) : null}

        <Card.Body>
          <Card.Title>
            <div style={{ color: theme.palette.text.primary }} className="card-title">{product.title} </div>
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between ">
              <div className="d-flex">
                <img
                  className=""
                  src={rate}
                  alt=""
                  height="16px"
                  width="16px"
                />
                <div className="card-rate mx-2">
                  {product.ratingsAverage || 0}
                </div>
              </div>
              <div className="d-flex">
                <div className="card-price">
                  {product.priceAfterDiscount >= 1 ? (
                    <div >
                      <span style={{ textDecorationLine: "line-through" ,color: theme.palette.text.primary }}>
                        {product.price}
                      </span>{" "}
                      {product.priceAfterDiscount}
                    </div>
                  ) : (
                    <div style={{ color: theme.palette.text.primary }}>{product.price}</div>
                    
                  )}
                </div>
                <div style={{ color: theme.palette.text.primary }} className="card-currency mx-1">dh</div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
