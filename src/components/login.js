import { React, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { loginRequest } from '../service/LoginService';
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
                            <Row xs="auto" className="mb-3 w-150" >
                                <Form.Control type="text" onChange={e => setLogin(e.target.value)} maxLength={30} placeholder="Login" required />
                            </Row>
                            <Row xs="auto" className="mb-3 w-150">
                                <Form.Control type="password" onChange={e => setPassword(e.target.value)} placeholder="Senha" required />
                            </Row>
                            <Row>
                                <Col sm="12" md={{ size: 6, offset: 4 }}>
                                    <Button variant="light" onClick={() => loginRequest(login, password)}>Entrar</Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Form>
            </Container>
        </div>

    );
}