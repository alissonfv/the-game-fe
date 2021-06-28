import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import {loginRequest} from '../pages/login/service/LoginService'
import '../index.css';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

export default function questionPanel() {

    return (
      <div className="inform">
          <div className="textArea">
              <InputGroupText xs="auto" >
                  <Input addon type="textarea" rows={5} cols={5} placeholder="Pergunta que está sendo realizada para o indivíduo" />
              </InputGroupText>
          </div>
          <InputGroup xs="auto">
          <InputGroupAddon addonType="prepend">
              <InputGroupText>
              <Input addon type="checkbox" aria-label="Alternativa 1" />
              </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Alternativa 1" />
          </InputGroup>

      <InputGroup xs="auto">
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

