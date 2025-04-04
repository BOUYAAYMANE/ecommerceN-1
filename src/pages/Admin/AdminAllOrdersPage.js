import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import AdminAllOrders from "../../Components/Admin/AdminAllOrders";
import AdminSideBar from "../../component/Admin/AdminSideBar";
import { PaginationComp } from "../../component/utilitys/PaginationComp";
import { AdminAllOrders } from "../../component/Admin/AdminAllOrders";
import { NavBarLogin } from "../../component/utilitys/NavBarLogin";
import { useTheme } from "@mui/system";
import { HeaderAll } from "../../component/header/HeaderAll";
const AdminAllOrdersPage = () => {
  const theme = useTheme();

  return (
    <>
      <HeaderAll theme={theme} />

      <Container>
        <Row className="py-3">
          <Col sm="3" xs="2" md="2">
            <AdminSideBar />
          </Col>

          <Col sm="9" xs="10" md="10">
            <AdminAllOrders />
            {/* <PaginationComp /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AdminAllOrdersPage;
