import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import rate from "../../assets/Image/rate.png";
import RateItem from "./RateItem";
import RatePost from "./RatePost";
import { PaginationComp } from "../utilitys/PaginationComp";
import ViewAllReviewHook from "../../hook/review/view-all-review-hook";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material";
const RateContainer = ({ rateAvg, rateQty  }) => {
  const { id } = useParams();
  const [allReview, onPress] = ViewAllReviewHook(id);
  const theme = useTheme()
  return (
    <Container className="rate-container" style={{backgroundColor: theme.palette.myColor.main}}>
      <Row>
        <Col style={{backgroundColor: theme.palette.myColor.main }} className="d-flex">
          <div style={{color: theme.palette.text.primary}} className="sub-tile d-inline p-1 ">Feedbacks</div>
          <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
          <div className="cat-rate  d-inline  p-1 pt-2">{rateAvg}</div>
          <div style={{color: theme.palette.text.primary}} className="rate-count d-inline p-1 pt-2">
            ({`Rating ${rateQty}  `})
          </div>
        </Col>
      </Row>
      <RatePost />
      
      {allReview && allReview.data ? (
        allReview.data.map((review, index) => {
          return <RateItem key={index} review={review} />;
        })
      ) : (
        //<h6>لا يوجد تقيمات الان</h6>
        null
      )}

      {allReview && allReview.paginationResult &&
      allReview.paginationResult.numberOfPages >= 2 ? (
        <PaginationComp
          pageCount={
            allReview.paginationResult
              ? allReview.paginationResult.numberOfPages
              : 0
          }
          onPress={onPress}
        />
      ) : null}
    </Container>
  );
};

export default RateContainer;
