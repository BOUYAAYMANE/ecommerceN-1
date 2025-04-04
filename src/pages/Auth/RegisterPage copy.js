import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import RegisterHook from "../../hook/Auth/register-hook";
import { ToastContainer } from "react-toastify";
import LoginPage, {
  Username,
  Password,
  Submit,
  Title,
  Logo,
} from "@react-login-page/page5";
import { ButtonDarkLight } from "../../component/utilitys/ButtonDarkLight";

const styles = { height: "100vh" };

export const RegisterPage22 = ({ theme }) => {
  const [
    name,
    email,
    phone,
    password,
    confirmPassword,
    loading,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangeConfirmPassword,
    OnSubmit,
  ] = RegisterHook();
  // const element = document.getElementsByClassName("login-page5 header");
  // element.remove();

  return (
    <div style={{ position: "relative" }}>
      <ButtonDarkLight theme={theme} />
      <div style={styles}>
        <LoginPage style={{ backgroundColor: theme.palette.bg.main }}>
          <Username
            placeholder="E-mail"
            name="E-mail"
            type="email"
            value={email}
            onChange={onChangeEmail}
          />
          <Password
            value={password}
            onChange={onChangePassword}
            placeholder="Password"
            name="userPassword"
            type="password"
          />
          <Submit onClick={OnSubmit} style={{ width: "100%" }}>
            Register
          </Submit>

          <Title style={{ color: theme.palette.text.primary }} />

          <label
            className="mx-auto my-4"
            style={{ color: theme.palette.text.primary }}
          >
            Vous n'avez pas de compte ?{" "}
            {/* Link : kandiroh ghir ila kayna page(file.js) dans router */}
            <Link to="/register" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                Cliquez ici
              </span>
            </Link>
          </label>

          <label className="mx-auto my-4">
            <Link
              to="/user/forget-password"
              style={{ textDecoration: "none", color: "red" }}
            >
              Forgot Username / Password ?
            </Link>
          </label>
        </LoginPage>
      </div>
      <ToastContainer />
    </div>
  );
};
