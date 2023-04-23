import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import RightNavbar from '../Shared/Footer/RightNavbar';
import Header from '../Shared/Footer/Header';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>

                <Row>






                    <Col lg={9}>

                        <Outlet></Outlet>
                    </Col>









                    <Col lg={3}>

                        <RightNavbar></RightNavbar>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NewsLayout;