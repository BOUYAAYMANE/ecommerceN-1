import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import notify from "./../../component/utilitys/ToastNotify";
import { createReview } from "./../../redux/actions/reviewAction";

const AddRateHook = (id) => {
  const dispatch = useDispatch();
  const [rateText, setRateText] = useState("");
  const [rateValue, setRateValue] = useState(0);

  const [loading, setLoading] = useState(true);

  const OnChangeRateText = (e) => {
    setRateText(e.target.value);
  };
  const OnChangeRateValue = (val) => {
    setRateValue(val);
  };
  // user fait login
  var user = "";
  if (localStorage.getItem("user") != null)
    user = JSON.parse(localStorage.getItem("user"));

  ///when save rate
  const onSubmit = async () => {
    if (rateText === "") {
      notify("Please write a comment", "Error");
      return;
    }
    setLoading(true);
    await dispatch(
      createReview(id, {
        review: rateText,
        rating: rateValue,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.reviewReducer.createView);

  useEffect(() => {
    if (loading === false) {
      if (res) {
        //console.log(res);
        if (res.status && res.status === 403) {
          notify("Admin is not allowed to evaluate", "Error");
        } else if (
          res.data &&
          res.data.errors &&
          res.data.errors[0].msg === "You already added review on this product"
        ) {
          notify("I have already added a review for this product", "Error");
        } else if (res.status && res.status === 201) {
          notify("Rating added successfully"
          , "success");
          setTimeout(() => {
            window.location.reload(false);
          }, 1000);
        } else if (localStorage.getItem("user") === null) {
          notify("not user", "Error");
        }
      }
    }
  }, [loading]);
  return [
    OnChangeRateText,
    OnChangeRateValue,
    rateText,
    rateValue,
    user,
    onSubmit,
  ];
};

export default AddRateHook;
