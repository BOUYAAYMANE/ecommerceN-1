import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forgetPassword } from "../../redux/actions/authAction";
import notify from "../../component/utilitys/ToastNotify";

const ForgetPasswordHook = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const OnChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onSubmit = async () => {
    if (email === "") {
      notify("من فضلك ادخل الايميل", "Error");
      return;
    }
    localStorage.setItem("user-email", email);
    setLoading(true);
    await dispatch(forgetPassword({ email }));
    setLoading(false);
  };
  const res = useSelector((state) => state.authReducer.forgetPassword);
  useEffect(() => {
    if (loading === false) {
      if (res && res.data && res.data.status) {
        if (res.data.status === "Success") {
          notify("تم ارسال الكود للايميل بنجاح", "Success");
          setTimeout(() => {
            navigate("/user/verify-code");
          }, 1000);
        }
        if (res.data.status === "fail") {
          notify("هذا الحساب غير موجود لدينا", "Error");
        }
      }
    }
  }, [loading]);
  return [OnChangeEmail, email, onSubmit];
};

export default ForgetPasswordHook;
