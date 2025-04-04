import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import UserSideBar from '../../component/User/UserSideBar'
import UserEditAddress from '../../component/User/UserEditAddress'
import { useTheme } from '@mui/system'
import { HeaderAll } from '../../component/header/HeaderAll'

const UserEditAddressPage = () => {
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
                  <UserEditAddress />
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default UserEditAddressPage
