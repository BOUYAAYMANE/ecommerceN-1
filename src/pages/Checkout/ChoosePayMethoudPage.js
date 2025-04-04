import React from "react";
import { Container } from "react-bootstrap";
import ChoosePayMethoud from "../../component/Checkout/ChoosePayMethoud";
import { NavBarLogin } from "../../component/utilitys/NavBarLogin";
import { useTheme } from "@mui/system";
import { HeaderAll } from "../../component/header/HeaderAll";

const ChoosePayMethoudPage = () => {
  const theme = useTheme();

  return (
    <>
      {/* <NavBarLogin /> */}
      <HeaderAll theme={theme} />

      <Container style={{ minHeight: "670px" }}>
        <ChoosePayMethoud />
      </Container>
    </>
  );
};

export default ChoosePayMethoudPage;
