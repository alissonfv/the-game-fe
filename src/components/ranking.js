import { React } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Queue from '../utils/nodeQueue';

export default function Ranking() {
    let rankingQueue = new Queue();
    const url = 'http://localhost:8060/v1/rankings'

    fetch(url).then(res => {
        console.log(res.body);
    });
}