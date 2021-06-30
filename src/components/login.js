import { React, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { loginRequest } from '../pages/login/service/LoginService.js'
import { accountRequest } from '../pages/login/service/CreateUserService.js'
import { direto } from '../pages/login/service/EntraDireto.js'
import '../index.css';



export default function LoginUser() {
    
    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);

    return (
        <div minDeviceWidth={1224} device={{ deviceWidth: 1600 }} className="bgimg">
            <Container>
                <Form>
                    <Col>
                        <div className="bgbuttons">

                            <Row className="mb-3 w-25">
                                <Form.Control type="text" onChange={e => setLogin(e.target.value)} maxLength={30} placeholder="Login" />
                            </Row>
                            <Row className="mb-3 w-25">
                                <Form.Control type="password" onChange={e => setPassword(e.target.value)} placeholder="Senha" />
                            </Row>
                            <Row>
                                <Col xs="auto" className="my-2" >
                                    <Button variant="light" onClick={() => loginRequest(login, password)}>Entrar</Button>
                                </Col>
                                <Col xs="auto" className="my-2">
                                    <Button variant="light" onClick={() => accountRequest()}>Criar Conta</Button>
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


