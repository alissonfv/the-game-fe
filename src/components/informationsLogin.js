import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import {loginRequest} from '../pages/login/service/LoginService'
import '../index.css';

export default function informationLogin() {


    return (
        <div className="bgimg">
            <Container>
                <Form>
                    <Col xs="auto">
                    <div className="bgbuttons">
                            <Row xs="auto" className="mb-3 w-25">
                            {/* necessita implementar o onChange={ e => setLogin(e.target.value) } no Form.Control corretamente */}
                            <Form.Control type="text"  maxLength={30} placeholder="Nome" />
                        </Row>
                        <Row xs="auto" className="mb-3 w-25">
                            {/* necessita implementar o onChange={ e => setLogin(e.target.value) } no Form.Control corretamente */}
                            <Form.Control type="password" maxLength={30} placeholder="Login" />
                        </Row>
                        <Row xs="auto" className="mb-3 w-25">
                            {/* necessita implementar o onChange={ e => setLogin(e.target.value) } no Form.Control corretamente */}
                            <Form.Control type="password" maxLength={30} placeholder="Senha" />
                        </Row>
                        <Row xs="auto" className="mb-3 w-25">
                            {/* necessita implementar o onChange={ e => setLogin(e.target.value) } no Form.Control corretamente */}
                            <Form.Control type="password" maxLength={30} placeholder="Confirmar Senha" />
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
                <p> CopyRight TheGameDosGuri © </p>
            </div>    
        </div>

    );
}


