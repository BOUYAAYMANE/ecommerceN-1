import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "react-toastify/dist/ReactToastify.css";
import {
  clearAllCartItem,
  deleteCartItem,
  updateCartItem,
} from "./../../redux/actions/cartAction";
import notify from "../../component/utilitys/ToastNotify";

const DeleteCartHook = (item) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [itemCount, setItemCount] = useState(0);
  const [showC, setShowC] = useState(false);
  const handleClearClose = () => setShowC(false);
  const handleClearShow = () => setShowC(true);
  // dans cartCheckput pour suprimer tout les product de cart
  const handelDeleteCart = async () => {
    setLoading(true);
    await dispatch(clearAllCartItem());
    setShowC(false)
    setLoading(false);
  };
  //
  useEffect(() => {
    if (item) setItemCount(item.count);
  }, []);

  const onChangeCount = (e) => {
    setItemCount(e.target.value);
  };
  const res = useSelector((state) => state.cartReducer.clearCart);
  useEffect(() => {
    if (loading === false) {
      if (res === "") {
        notify("تم الحذف بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else {
      }
    }
  }, [loading]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // delate product dans cart
  const handelDeleteItem = async () => {
    await dispatch(deleteCartItem(item._id));
    setShow(false);
    window.location.reload(false);
  };
  // update count de product dans cart

  const handeleUpdateCart = async () => {
    if(itemCount)
    await dispatch(
      updateCartItem(item._id, {
        count: itemCount,
      })
    );
    window.location.reload(false);
  };

  return [
    handelDeleteCart,
    show,
    handleClose,
    handleShow,
    handelDeleteItem,
    itemCount,
    onChangeCount,
    handeleUpdateCart,
    handleClearShow,
    handleClearClose,
    showC
  ];
};

export default DeleteCartHook;
