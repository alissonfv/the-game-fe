import React from 'react';
import { FormText } from 'reactstrap';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import '../index.css';

export default function informationLogin() {

    return (
        <div className="bgimg">
            <Container>
                <Form>
                    <Col xs="auto">
                        <div className="bgbuttons">
                            <Row xs="auto" className="mb-3 w-25">
                                <Form.Control type="text" maxLength={30} placeholder="Nome" required />
                            </Row>
                            <Row xs="auto" className="mb-3 w-25">
                                <Form.Control type="login" maxLength={30} placeholder="Login" required />
                            </Row>
                            <Row xs="auto" className="mb-3 w-25">
                                <Form.Control type="password" maxLength={30} placeholder="Senha" required />
                            </Row>
                            <Row xs="auto" className="mb-3 w-25">
                                <Form.Control type="password" maxLength={30} placeholder="Confirmar Senha" required />
                                <FormText tooltip>Senhas devem ser iguais</FormText>
                            </Row>
                            <Row>
                                <Col xs="auto" className="my-2" >
                                    <Button variant="light" >Acessar</Button>
                                </Col>
                                <Col xs="auto" className="my-2">
                                    <Button variant="light">Cancelar</Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Form>
            </Container>
            <div className="footer">
                <p> CopyRight The Game Solution © </p>
            </div>
        </div>
    );
}