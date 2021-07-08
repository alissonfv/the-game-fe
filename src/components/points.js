import { React, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../index.css';
import { getPoints } from '../utils/auth';

export default function Points() {

    
    return (
            <Container>
                Parabéns por concluir as questões você acertou {getPoints() ? getPoints() : 0}/10, sua pontuação foi {getPoints() ? getPoints() : 0}
            </Container>
    );

}


