import { React, Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { rankingRequest } from '../pages/ranking/service/rankingService';

const ranking = rankingRequest();

export default class Ranking extends Component {
    constructor(props) {
        super(props);
        
        this.state = ranking;
        console.log(this.state);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>Nome</Col>
                    <Col>Pontos</Col>
                </Row>
            </Container>
        );
    }
}