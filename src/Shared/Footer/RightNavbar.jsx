import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from './QZone';

const RightNavbar = () => {
    return (
        <div className='my-5'>
            <div>
                <h3>Login With </h3>
                <Button className='mb-3' variant="outline-primary"> <FaGoogle></FaGoogle> login with Google </Button>
                <Button variant="outline-secondary"> <FaGithub></FaGithub> login with Github </Button>
            </div>

            <div className='my-4'>
                <h3>Find Us On </h3>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook> </FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>

                </ListGroup>
            </div>

         
          <QZone></QZone>
  

        </div>
    );
};

export default RightNavbar;