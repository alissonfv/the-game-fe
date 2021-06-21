import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import {loginRequest} from '../pages/login/service/LoginService'
import '../index.css';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Table } from 'reactstrap';

export default function LoginUser() {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
      <div className="bgimg">
      <Container>
          <Form>
              <Col>
              <div className="bgbuttons">
                  <Row xs="auto" className="mb-3 w-25">
                      <Form.Control type="text" onChange={ e => setLogin(e.target.value) } maxLength={30} placeholder="Login" />
                  </Row>
                  <Row xs="auto" className="mb-3 w-25">
                      <Form.Control type="password" onChange={ e => setPassword(e.target.value) } placeholder="Senha" />
                  </Row>
                  <Row>
                      <Col xs="auto" className="my-2" >
                          <Button variant="light" onClick={ () => loginRequest(login, password) }>Entrar</Button>
                      </Col>
                      <Col xs="auto" className="my-2">
                          <Button variant="light" type="submit">Criar Conta</Button>
                      </Col>
                  </Row>
               </div>   
              </Col>
          </Form>
      </Container>
      <div className="footer">
      <p> CopyRight TheGameDosGuri © </p>
      </div>    
  </div>
);
}