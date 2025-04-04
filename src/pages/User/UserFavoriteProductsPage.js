import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import UserSideBar from '../../component/User/UserSideBar'
import UserFavoriteProduct from '../../component/User/UserFavoriteProduct'
import { useTheme } from '@mui/system'
import { HeaderAll } from '../../component/header/HeaderAll'

const UserFavoriteProductsPage = () => {
    const theme = useTheme();

    return (
        <>
      <HeaderAll theme={theme} />

        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <UserSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <UserFavoriteProduct />
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default UserFavoriteProductsPage
