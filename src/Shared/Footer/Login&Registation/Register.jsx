import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Register = () => {
  const [checkBox , setCheckBox] = useState(false)
  const {createAccount}= useContext(AuthContext)

  const location = useLocation()
  const navigate = useNavigate()
  console.log(location)
  const handleRegister =(event)=>{
    event.preventDefault()
    const from = location.state?.pathname || '/category/0'
    const form = event.target 
    const name = form.name.value 
    const email = form.email.value 
    const password = form.password.value 

    createAccount(email,password)
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


  const cheked=(event)=>{
    const check = event.target.checked
    setCheckBox(check)
    // console.log(check)

  }


  return (
    <div>
      <Form onSubmit={handleRegister} className="w-50 mx-auto">
        <h3>Please Ragistation</h3>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check  onClick={cheked} name="check" type="checkbox" label={<>Accept<Link to='/terms'> Terms And Condition </Link></>} />
        </Form.Group>

        <Button disabled={!checkBox} variant="primary" type="submit">
          Submit
        </Button>

      </Form>
    </div>
  );
};

export default Register;
