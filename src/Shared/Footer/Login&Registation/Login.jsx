import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Login = () => {
  const {logIn} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
 
  const handleLogin =(event)=>{
    event.preventDefault()

    console.log('dukse')
   
    const from = location.state?.from.pathname || '/category/0'
  
    
    const form = event.target 
    const name = form.name.value 
    const email = form.email.value 
    const password = form.password.value 

    logIn(email,password)
    .then(result=>{
      const logged = result.user 
      console.log(logged)
      form.reset()
      navigate(from)
    })
    .catch((error)=>{
      console.log(error.message)
    })

    

    
  }


  return (
    <div>
      <Form onSubmit={handleLogin} className="w-50 mx-auto">
        <h3>Please Login</h3>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>
        <Form.Text>
        dont have an account? <Link to='/register' state={location.state?.from}>Register</Link>
        </Form.Text>
        <Button  variant="primary" type="submit">
          Submit
        </Button>

      </Form>
    </div>
  );
};

export default Login;
