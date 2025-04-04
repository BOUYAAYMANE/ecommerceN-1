import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/actions/authAction";
import notify from './../../component/ToastNotify';

const LoginHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async () => {
    setIsPress(true);
    setLoading(true);
    await dispatch(
      loginUser({
        email,
        password,
      })
    );

    setLoading(false);
    setIsPress(false);
  };
// res => qui return lorsque en envoi login+pass
  const res = useSelector((state) => state.authReducer.loginUser);
  useEffect(() => {
    if (loading === false) {
      if (res) {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
        //  //console.log(res.data.data)
        // data de user qui fait login (njibo les info dialo)
          localStorage.setItem("user", JSON.stringify(res.data.data));
          notify("تم تسجيل الدخول بنجاح", "Success");
          setTimeout(() => {
            window.location.href = "/";
          }, 1500);
        } else {
          // kanmsho fihalat kan dakhel shih omn b3ed dkhel b dakchy
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }

        if (res.data.message === "Incorrect email or password") {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          notify("كلمة السر او الايميل خطا", "Error");
        }
        setLoading(true);
      }
    }
  }, [loading]);
  return [
    email,
    password,
    loading,
    onChangeEmail,
    onChangePassword,
    onSubmit,
    isPress,
  ];
};

export default LoginHook;
