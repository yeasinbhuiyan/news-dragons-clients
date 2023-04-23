import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <Form className="w-50 mx-auto">
        <h3>Please Ragistation</h3>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <Button>Register</Button>

      </Form>
    </div>
  );
};

export default Register;
