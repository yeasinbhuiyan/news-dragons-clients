import React from 'react';
import Header from '../Shared/Footer/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNavbar from '../Shared/Footer/LeftNavbar';
import RightNavbar from '../Shared/Footer/RightNavbar';



const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>

                <Row>
                    <Col lg={3}>
                        <LeftNavbar></LeftNavbar>

                    </Col>







                    <Col lg={6}><h4>main container .....</h4></Col>









                    <Col lg={3}>

                        <RightNavbar></RightNavbar>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;