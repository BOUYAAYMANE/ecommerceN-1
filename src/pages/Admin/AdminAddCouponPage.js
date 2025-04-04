import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminSideBar from '../../component/Admin/AdminSideBar'
import AdminAddCoupon from '../../component/Admin/AdminAddCoupon'
import { NavBarLogin } from '../../component/utilitys/NavBarLogin'
const AdminAddCouponPage = () => {
    return (
        <>

        <NavBarLogin />
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                   <AdminAddCoupon />
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default AdminAddCouponPage