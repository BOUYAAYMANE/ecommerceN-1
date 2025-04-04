import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import notify from "../../component/utilitys/ToastNotify";
import { resetPassword, verifyPassword } from "../../redux/actions/authAction";

const ResetPasswordHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setComfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const OnChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const OnChangeConfirmPassword = (e) => {
    setComfirmPassword(e.target.value);
  };

  const onSubmit = async () => {
    if (password === "") {
      notify("من فضلك ادخل كلمة السر", "Error");
      return;
    }
    if (password != confirmPassword) {
      notify("كلمة السر غير متطابقه مع تاكيد كلمع السر", "Error");
      return;
    }
    setLoading(true);
    await dispatch(
      resetPassword({
        email: localStorage.getItem("user-email"),
        newPassword: password,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.authReducer.verifyPassword);

  useEffect(() => {
    if (loading === false) {
      if (res && res.data && res.data.status) {
        if (res.data.status === "Success") {
          notify("تم تغير كلمة السر بنجاح", "Success");
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        }
        if (res.data.status === "fail") {
          notify("من فضلك اطلب كود جديد", "Error");
        }
      }
    }
  }, [loading]);

  return [
    password,
    confirmPassword,
    OnChangePassword,
    OnChangeConfirmPassword,
    onSubmit,
  ];
};

export default ResetPasswordHook;
