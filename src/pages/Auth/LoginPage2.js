// import React from 'react';
// import Login from '@react-login-page/page8';

// export const LoginPage = () => <Login style={{ height: 690 }} />;

// // export default LoginPage;
import React, { useContext } from "react";
import LoginPage, {
  Username,
  Password,
  Submit,
  Title,
  Logo,
} from "@react-login-page/page5";
import LoginHook from "../../hook/Auth/login-hook";
import { Link } from "react-router-dom";
import { ButtonDarkLight } from "../../component/utilitys/ButtonDarkLight";
import { ToastContainer } from "react-toastify";

// import LoginLogo from 'react-login-page/logo';

const styles = { height: "100vh" };

// const [theme, colorMode] = useMode();
export const LoginPagee2 = ({ theme }) => {
  const [
    email,
    password,
    loading,
    onChangeEmail,
    onChangePassword,
    onSubmit,
    isPress,
  ] = LoginHook();

  return (
    <div style={{position:'relative'}}>
      <ButtonDarkLight theme={theme}/>
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
          <Submit onClick={onSubmit} style={{ width: "100%" }}>
            login
          </Submit>
          {/* <Submit type="reset" keyname="reset">
        重置
      </Submit> */}
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
              Forgot Username / Password?
            </Link>
          </label>
          <Logo>
            <img src="" />
          </Logo>
        </LoginPage>
      </div>
      <ToastContainer />
    </div>
  );
};
