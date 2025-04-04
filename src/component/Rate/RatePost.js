import React from "react";
import { Col, Row } from "react-bootstrap";
import AddRateHook from "../../hook/review/add-rate-hook";
import { ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material";
import StarRatings from "react-star-ratings";

// import ReactStars from 'react-rating-stars-component';
const RatePost = () => {
  const { id } = useParams();
  const theme = useTheme();

  const [
    OnChangeRateText,
    OnChangeRateValue,
    rateText,
    rateValue,
    user,
    onSubmit,
  ] = AddRateHook(id);

  var name = "";
  if (user) name = user.name;

  const changeRating = (newRating, name) => {
    OnChangeRateValue(newRating);
  };

  return (
    <div>
      <Row className="mt-3 ">
        <Col sm="12" className="me-5  d-flex">
          <div
            style={{ color: theme.palette.text.primary }}
            className="rate-name  d-inline ms-3 mt-1 me-3"
          >
            {name}
          </div>
          {/* <ReactStars {...setting} /> */}
          <StarRatings
            rating={rateValue}
            starRatedColor="orange" // Couleur des étoiles remplies
            changeRating={changeRating} // Fonction de rappel lorsqu'une note est changée
            numberOfStars={5} // Nombre d'étoiles à afficher
            name="rating" // Nom du champ de notation
            starDimension="20px"
            starSpacing="2px" // Espacement entre les étoiles
            halfStars={true} // Permet la sélection des demi-étoiles
          />
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="d-felx me-4 pb-2">
          <textarea
            value={rateText}
            onChange={OnChangeRateText}
            className="input-form-area p-2 mt-3"
            rows="2"
            cols="20"
            placeholder="Write your comment..."
          />
          <div className=" d-flex justify-content-end al">
            <div
              onClick={onSubmit}
              className="product-cart-add px-3  py-2 text-center d-inline"
            >
              Add Comment
            </div>
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};
export default RatePost;
