import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminSideBar from '../../component/Admin/AdminSideBar'
import AdminAddSubCategory from '../../component/Admin/AdminAddSubCategory'
import { NavBarLogin } from '../../component/utilitys/NavBarLogin'

const AdminAddSubCategoryPage = () => {
    return (
        <>

        <NavBarLogin />
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                     <AdminAddSubCategory />
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default AdminAddSubCategoryPage
