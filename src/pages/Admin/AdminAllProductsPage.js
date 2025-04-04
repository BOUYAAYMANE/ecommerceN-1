import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminAllProducts from "../../component/Admin/AdminAllProducts";
import AdminSideBar from "../../component/Admin/AdminSideBar";
import { PaginationComp } from "../../component/utilitys/PaginationComp";
import ViewAdminProducthook from "../../hook/admin/view-admin-product-hook";
import { NavBarLogin } from "../../component/utilitys/NavBarLogin";
import { useTheme } from "@mui/system";
import { HeaderAll } from "../../component/header/HeaderAll";
const AdminAllProductsPage = () => {
  const [items, getPage, pageCount] = ViewAdminProducthook();
const theme = useTheme()
  return (
    <>
      {/* <NavBarLogin /> */}
      <HeaderAll theme={theme} />

      <Container>
        <Row className="py-3">
          <Col sm="3" xs="2" md="2">
            <AdminSideBar />
          </Col>
          {/* ajouter notificatio and spinner */}
          <Col sm="9" xs="10" md="10">
            {items ? <AdminAllProducts products={items} /> : null}

            {pageCount > 1 ? (
              <PaginationComp pageCount={pageCount} onPress={getPage} />
            ) : null}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminAllProductsPage;
