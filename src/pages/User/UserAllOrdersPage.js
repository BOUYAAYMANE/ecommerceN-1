import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import UserAllOrder from '../../component/User/UserAllOrder'
import UserSideBar from '../../component/User/UserSideBar'
import { useTheme } from '@mui/system'
import { HeaderAll } from '../../component/header/HeaderAll'

const UserAllOrdersPage = () => {
    const theme = useTheme();

    return (
        <>

      <HeaderAll theme={theme} />
        <Container >

            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <UserSideBar/>
                </Col>

                <Col sm="9" xs="10" md="10">
                  <UserAllOrder />
                </Col>
            </Row>
        </Container>
        </>
    )
}


export default UserAllOrdersPage
