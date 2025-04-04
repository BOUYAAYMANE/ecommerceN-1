import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserSideBar from "../../component/User/UserSideBar";
import UserProfile from "../../component/User/UserProfile";
import { HeaderAll } from "../../component/header/HeaderAll";
import { useTheme } from "@mui/system";

const UserProfilePage = () => {
    const theme = useTheme();
  return (
        // style={{
    //     color: theme.palette.text.primary,
    //     backgroundColor: theme.palette.button.main,
    //   }}
    // style={{
    //     color: theme.palette.text.primary,

    //   }}
    // style={{
    //     backgroundColor: theme.palette.button.main,

    //   }}
    <>
      <HeaderAll theme={theme} />
      <Container className="mt-2">
        <Row className="py-3">
          <Col sm="3" xs="2" md="2">
            <UserSideBar />
          </Col>

          <Col sm="9" xs="10" md="10">
            <UserProfile />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default UserProfilePage;
