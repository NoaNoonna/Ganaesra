import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticate}) => {
  const navigate = useNavigate();
  const login = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    navigate("/");
  }
 
  return (
    <Container>
       <Form onSubmit={(event)=>{login(event)}}>
        <Form.Group as={Row} className="login-page" controlId="formHorizontalEmail" >
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="login-page" controlId="formHorizontalPassword">
          <Col sm={10}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <fieldset>
          <Form.Group as={Row} className="login-page">
            <Col className="radio" sm={10}>
              <Form.Check
                type="radio"
                label="male"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="female"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
            </Col>
          </Form.Group>
        </fieldset>
        <Form.Group as={Row} className="remember-me" controlId="formHorizontalCheck">
          <Col sm={{ span: 12, offset: 2 }}>
            <Form.Check label="Remember me" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="login-button">
          <Col sm={{ span: 12, offset: 2 }}>
            <Button variant="danger" type="submit"
              >
                Login
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  )
}

export default Login
