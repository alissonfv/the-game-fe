import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import {loginRequest} from '../pages/login/service/LoginService'
import '../index.css';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Table } from 'reactstrap';

export default function rankingPanel() {

    // const [login, setLogin] = useState('');
    // const [password, setPassword] = useState('');

    return (
      <div className="rankingPanel" xs="auto" >
      <Table xs="auto" >
        <thead>
          <tr>
            <th>Classificação</th>
            <th>Username</th>
            <th>Nome</th>
            <th>Pontos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1°</th>
            <td>@VictorGeorges</td>
            <td>Victor Georges </td>
            <td>X</td>
          </tr>
          <tr>
            <th scope="row">2°</th>
            <td>@AndrewsVieira</td>
            <td>Andrews Vieira</td>
            <td>X</td>
          </tr>
          <tr>
            <th scope="row">3°</th>
            <td>@AlissonVieira</td>
            <td>Alisson Vieira</td>
            <td>X</td>
          </tr>                
          <tr>
            <th scope="row">4°</th>
            <td>@JairSchwan</td>
            <td>Jair </td>
            <td>X</td>
          </tr>
          <tr>
            <th scope="row">5°</th>
            <td>@FIESC</td>
            <td>Federação das Indústrias-SC </td>
            <td>xx</td>
          </tr>
        </tbody>
      </Table>   
  </div>
);
}


