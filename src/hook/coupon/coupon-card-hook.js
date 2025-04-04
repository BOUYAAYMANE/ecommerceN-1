import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCoupon } from "../../redux/actions/couponAction";

const CouponCardHook = (coupon) => {
  const dispatch = useDispatch();
  const dateString = coupon.expire;
  //funct formatDate pour but de formater une chaîne de caractères représentant une date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handelDelete = async () => {
    await dispatch(deleteCoupon(coupon._id));
    setShow(false);
    window.location.reload(false);
  };
  return [formatDate, dateString, show, handleClose, handleShow, handelDelete];
};

export default CouponCardHook;
