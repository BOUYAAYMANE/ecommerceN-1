import React, { useState } from "react";
import { Col, Card, Row, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import prod1 from "../../assets/Image/prod1.png";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/actions/productsAction";
import { useTheme } from "@mui/system";
const AdminAllProductsCard = ({ product }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const theme = useTheme()
  const dispatch = useDispatch();

  const handelDelete = async () => {
    await dispatch(deleteProduct(product._id));
    setShow(false);
    // reload lpage
    window.location.reload();
  };
  return (
    <Col  xs="12" sm="6" md="5" lg="4" className="d-flex">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {" "}
            <div className="font">Confirmation of Deletion</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font">هل انتا متاكد من عملية الحذف للمنتج</div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={handleClose}>
            تراجع
          </Button>
          <Button className="font" variant="dark" onClick={handelDelete}>
            حذف
          </Button>
        </Modal.Footer>
      </Modal>
      <Card 
      //  style={{  }}
        className="my-2"
        style={{
          width: "100%",
          height: "350px",
          borderRadius: "8px",
          border: "none",
        backgroundColor: theme.palette.myColor.main
        }}
      >
        <Row  className="d-flex justify-content-center px-2">
          <Col className=" d-flex justify-content-between">
            <div  style={{ color: theme.palette.text.primary }} onClick={handleShow} className="d-inline item-delete-edit">
              Remove
            </div>
            <Link
              to={`/admin/updateProduct/${product._id}`}
              style={{ textDecoration: "none" }}
            >
              <div  style={{ color: theme.palette.text.primary }} className="d-inline item-delete-edit">Update</div>
            </Link>
          </Col>
        </Row>
        <Link to={`/product/${product._id}`} style={{ textDecoration: "none" }}>
          <Card.Img
            style={{ height: "228px", width: "100%" }}
            src={product.imageCover}
          />
          <Card.Body>
            <Card.Title>
              <div  style={{ color: theme.palette.text.primary }} className="card-title">{product.title}</div>
            </Card.Title>
            <Card.Text>
              <div className="d-flex justify-content-between">
                <div className="card-rate">{product.ratingsQuantity}</div>
                <div className="d-flex">
                  <div className="card-price">
                    {product.priceAfterDiscount >= 1 ? (
                      <div>
                        <span style={{ textDecorationLine: "line-through" ,color: theme.palette.text.primary }}>
                          {product.price}
                        </span>{" "}
                        <span style={{ color: theme.palette.text.primary }}>

                        {product.priceAfterDiscount}
                        </span>
                      </div>
                    ) : (
                      <div  style={{ color: theme.palette.text.primary }}>

                    {  product.price}
                      </div>
                    )}
                  </div>
                  <div  style={{ color: theme.palette.text.primary }}  className="card-currency mx-1">dh</div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
};

export default AdminAllProductsCard;
