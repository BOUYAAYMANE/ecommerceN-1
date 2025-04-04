import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import notify from '../useNotifaction';
import { deleteReviewOnProduct } from "./../../redux/actions/reviewAction";
import notify from "../../component/utilitys/ToastNotify";
const DeleteRateHook = (review) => {
  const dispatch = useDispatch();

  const [isUser, setIsUser] = useState(false);
  const [loading, setLoading] = useState(true);

  const [showDelete, setShowDelete] = useState(false);
  const handleClose = () => setShowDelete(false);
  const handleShow = () => setShowDelete(true);

  let user = JSON.parse(localStorage.getItem("user"));
//  //console.log(user);

  useEffect(() => {
    if (user !==null) {
      if (review.user._id === user._id) {
        setIsUser(true);
      }
    }
  }, []);
  const handelDelete = async () => {
    setLoading(true);
    await dispatch(deleteReviewOnProduct(review._id));
    setLoading(false);
    handleClose();
  };
  const res = useSelector((state) => state.reviewReducer.deleteReview);

  useEffect(() => {
    if (loading === false) {
      if (res === "") {
       //console.log(user);
        notify("تم حذف التقييم بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else notify("هناك مشكله فى عملية المسح", "Error");
    }
  }, [loading]);

  return [isUser, handelDelete, handleShow, handleClose, showDelete];
};

export default DeleteRateHook;
