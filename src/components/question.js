import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import {loginRequest} from '../pages/login/service/LoginService'
import '../index.css';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

export default function LoginUser() {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="inform">
            <div className="textArea">
                <InputGroupText>
                    <Input addon type="textarea" rows={5} cols={5} placeholder="Pergunta que está sendo realizada para o indivíduo" />
                </InputGroupText>
            </div>
            <InputGroup>
            <InputGroupAddon addonType="prepend">
                <InputGroupText>
                <Input addon type="checkbox" aria-label="Alternativa 1" />
                </InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Alternativa 1" />
            </InputGroup>

        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <Input addon type="checkbox" aria-label="Alternativa 2" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Alternativa 2" />
        </InputGroup>

        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <Input addon type="checkbox" aria-label="Alternativa 3" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Alternativa 3" />
        </InputGroup>

        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <Input addon type="checkbox" aria-label="Alternativa 4" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Alternativa 4" />
        </InputGroup>

        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <Input addon type="checkbox" aria-label="Alternativa 5" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Alternativa 5" />
        </InputGroup>

      </div>
    );
}


