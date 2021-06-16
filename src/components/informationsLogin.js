import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import {loginRequest} from '../pages/login/service/LoginService'
import '../index.css';

export default function LoginUser() {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="bgimg">
            <Container>
                <Form>
                    <Col>
                    <div className="bgbuttons">
                            <Row className="mb-3 w-25">
                            {/* necessita implementar o onChange={ e => setLogin(e.target.value) } no Form.Control corretamente */}
                            <Form.Control type="text"  maxLength={30} placeholder="Nome" />
                        </Row>
                        <Row className="mb-3 w-25">
                            {/* necessita implementar o onChange={ e => setLogin(e.target.value) } no Form.Control corretamente */}
                            <Form.Control type="password" maxLength={30} placeholder="Login" />
                        </Row>
                        <Row className="mb-3 w-25">
                            {/* necessita implementar o onChange={ e => setLogin(e.target.value) } no Form.Control corretamente */}
                            <Form.Control type="password" maxLength={30} placeholder="Senha" />
                        </Row>
                        <Row className="mb-3 w-25">
                            {/* necessita implementar o onChange={ e => setLogin(e.target.value) } no Form.Control corretamente */}
                            <Form.Control type="password" maxLength={30} placeholder="Confirmar Senha" />
                        </Row>
                        <Row>
                            <Col xs="auto"   className="my-2" >
                                <Button variant="light" onClick={ () => loginRequest(login, password) }>Accessar</Button>
                            </Col>
                            <Col xs="auto"  className="my-2">
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


