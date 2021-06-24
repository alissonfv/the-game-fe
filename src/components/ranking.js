import { React, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { rankingRequest } from '../pages/ranking/service/rankingService';


export default function Ranking() {
    const [ranking, setRanking] = useState([]);
    useEffect(() => {
        async function getRanking() {
            setRanking(await rankingRequest());
        }
        getRanking();
    }, []);


    return (
        <Container>
            <table>
                <tr>
                    <th>Nome</th>
                    <th>Pontuação</th>
                </tr>
                {ranking.map(res => {
                    return (
                        <tr>
                            <td>{res.name}</td>
                            <td>{res.points}</td>
                        </tr>
                    );
                })}
            </table>
        </Container>
    );
}