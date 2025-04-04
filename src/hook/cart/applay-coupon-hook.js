import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { applayCoupnCart } from "../../redux/actions/cartAction";
import notify from "../../component/utilitys/ToastNotify";
import { useNavigate } from "react-router-dom";

const ApplayCouponHook = (cartItems) => {
  const dispatch = useDispatch();

  const [couponName, setCouponName] = useState("");
  const [loading, setLoading] = useState(true);

  const onChangeCoupon = (e) => {
    setCouponName(e);
  };

  const handelSubmitCoupon = async () => {
    if (couponName === "") {
      notify("من فضلك ادخل الكوبون", "warning");
      return;
    }
    setLoading(true);
    await dispatch(
      applayCoupnCart({
        couponName: couponName,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.cartReducer.applayCoupon);

  useEffect(() => {
    if (loading === false) {
      //console.log(res)
      if (res && res.status === 200) {
        notify("تم تطبيق الكوبون بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else {
        notify("هذا الكوبون غير صحيح او منتهى الصلاحيه", "warning");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      }
    }
  }, [loading]);

  const navigate = useNavigate();
  const handelCheckout = () => {
    if (cartItems.length >= 1) {
      navigate("/order/paymethoud");
    } else {
      notify("من فضلك اضف منتجات للعربة اولا", "warning");
    }
  };

  return [couponName, onChangeCoupon, handelSubmitCoupon, handelCheckout];
};

export default ApplayCouponHook;
