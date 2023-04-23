import React, { useContext } from 'react';
import moment from 'moment';
import logo from '../../assets/logo.png'
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

import { AuthContext } from '../../Providers/AuthProvider';
import NavigationVar from './NavigationVar/NavigationVar';
const Header = () => {
   
    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'>Journalism Without Fear or Favour</p>

                <p>{moment().format("dddd, MMMM, D YYYY")}</p>
            </div>

            <div className='d-flex'>
                <Button variant="danger">Danger</Button>
                <Marquee speed={100}>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>


            </div>


        </Container>
    );
};

export default Header;