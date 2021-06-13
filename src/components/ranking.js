import { React } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Queue from '../utils/nodeQueue';
import { getToken } from '../utils/auth';

export default function Ranking() {
    let rankingQueue = new Queue();
    const url = 'http://localhost:8060/v1/rankings'
    const token = getToken();
    const options = {
        method: 'get',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

    fetch(url, options).then(res => {
        return res.json();
    }).then(data => {
        data.forEach(element => {
            console.log(element);
            rankingQueue.inserting(element);
        });
    });
    
    console.log(rankingQueue);
    if (rankingQueue.begin && rankingQueue.end) {
        while(rankingQueue.next()) {
            console.log("next", rankingQueue.next());
            rankingQueue.removing();
        }
    }

    return (
        <Container>
            <Row>
                <Col><p>Nome</p></Col>
                <Col><p>Pontos</p></Col>
            </Row>
        </Container>
    );
}