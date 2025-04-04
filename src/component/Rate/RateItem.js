import React, { useState } from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import deleteicon from "../../assets/Image/delete.png";
import editicon from "../../assets/Image/edit.png";
import { ToastContainer } from "react-toastify";
import rate from "../../assets/Image/rate.png";
import DeleteRateHook from "../../hook/review/delete-rate-hook";
import EditRateHook from "../../hook/review/edit-rate-hook";

// import DeleteRateHook from '../../hook/review/delete-rate-hook'
// import EditRateHook from '../../hook/review/edit-rate-hook'
import StarRatings from "react-star-ratings";
import { useTheme } from "@mui/material";
const RateItem = ({ review }) => {
  const theme = useTheme();

  const [isUser, handelDelete, handleShow, handleClose, showDelete] =
    DeleteRateHook(review);
  const [
    showEdit,
    handleCloseEdit,
    handleShowEdit,
    handelEdit,
    onChangeRateText,
    newRateText,
    OnChangeRateValue,
    newRateValue,
  ] = EditRateHook(review);

  const changeRating = (newRating) => {
    OnChangeRateValue(newRating);
  };

  return (
    <div style={{ backgroundColor: theme.palette.myColor.main }}>
      <Modal show={showDelete} onHide={handleClose}>
        <Modal.Header style={{ backgroundColor: theme.palette.myColor.main }}>
          <Modal.Title>
            {" "}
            <div
              style={{ backgroundColor: theme.palette.myColor.main }}
              className="font"
            >
              Confirm Deletion
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: theme.palette.myColor.main }}>
          <div
            style={{ backgroundColor: theme.palette.myColor.main }}
            className="font"
          >
            Are you sure you want to delete the rating?
          </div>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: theme.palette.myColor.main }}>
          <Button
            style={{ backgroundColor: "green" }}
            className="font"
            variant="success"
            onClick={handleClose}
          >
            Retreat
          </Button>
          <Button
            style={{ backgroundColor: "red" }}
            className="font"
            variant="dark"
            onClick={handelDelete}
          >
            delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header style={{ backgroundColor: theme.palette.myColor.main }}>
          <Modal.Title>
            {" "}
            <div
              style={{ backgroundColor: theme.palette.myColor.main }}
              className="font"
            >
              Edit Rating
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: theme.palette.myColor.main }}>
          {/* <ReactStars {...setting} /> */}

          <StarRatings
            rating={newRateValue}
            starRatedColor="orange" // Couleur des étoiles remplies
            changeRating={changeRating} // Fonction de rappel lorsqu'une note est changée
            numberOfStars={5} // Nombre d'étoiles à afficher
            name="rating" // Nom du champ de notation
            starDimension="20px"
            starSpacing="2px" // Espacement entre les étoiles
            halfStars={true} // Permet la sélection des demi-étoiles
          />

          <input
            onChange={onChangeRateText}
            value={newRateText}
            type="text"
            className="font w-100"
            style={{
              border: "none",
              backgroundColor: theme.palette.myColor.main,
              color: theme.palette.text.primary,
            }}
          />
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: theme.palette.myColor.main }}>
          <Button
            style={{ backgroundColor: "orange" }}
            className="font"
            variant="success"
            onClick={handleCloseEdit}
          >
            Retreat
          </Button>
          <Button
            style={{ backgroundColor: "green" }}
            className="font"
            variant="dark"
            onClick={handelEdit}
          >
            update
          </Button>
        </Modal.Footer>
      </Modal>

      <Row className="mt-3">
        <Col className="d-felx me-5">
          <div
            style={{ color: theme.palette.text.primary }}
            className="rate-name  d-inline ms-2 me-3"
          >
            {review.user.name}
          </div>
          <img className="" src={rate} alt="" height="16px" width="16px" />
          <div
            style={{ color: theme.palette.text.primary }}
            className="cat-rate  d-inline  p-1 pt-2"
          >
            {review.rating}
          </div>
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="d-felx me-4 pb-2">
          <div
            style={{ color: theme.palette.text.primary }}
            className="rate-description  d-inline ms-2"
          >
            {review.review}
          </div>
          {isUser === true ? (
            <div className="d-inline d-flex justify-content-end">
              <img
                src={deleteicon}
                onClick={handleShow}
                width="20px"
                height="20px"
                style={{ cursor: "pointer" }}
                alt="delete"
              />

              <img
                src={editicon}
                onClick={handleShowEdit}
                width="20px"
                height="20px"
                style={{ cursor: "pointer" }}
                alt="edit"
              />
            </div>
          ) : null}
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default RateItem;
