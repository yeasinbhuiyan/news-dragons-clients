import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Form className="w-50 mx-auto">
        <h3>Please Login</h3>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Text>
        dont have an account? <Link to='/register'>Register</Link>
        </Form.Text>
      </Form>
    </div>
  );
};

export default Login;
