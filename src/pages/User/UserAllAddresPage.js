import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import UserSideBar from '../../component/User/UserSideBar'
import UserAllAddress from '../../component/User/UserAllAddress'
import { useTheme } from '@mui/system'
import { HeaderAll } from '../../component/header/HeaderAll'

const UserAllAddresPage = () => {
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
                  <UserAllAddress />
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default UserAllAddresPage
