import { React, useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { rankingRequest } from '../pages/ranking/service/rankingService';
import '../index.css';

export default function Ranking() {
    const [ranking, setRanking] = useState([]);
    const [option, setOption] = useState(1);
    useEffect(() => {
        async function getRanking() {
            setRanking(await rankingRequest(option));
        }
        getRanking();
    }, [option]);

    return (
        <div className="rankingPanel" xs="auto" >
            <Table xs="auto" >
                <thead>
                    <tr >
                        <th onClick={() => setOption(2)} scope="row" >Nome</th>
                        <th onClick={() => setOption(1)} scope="row">Pontuação</th>
                    </tr>
                </thead>
                <tbody>
                    {ranking.map(res => {
                        return (
                            <tr>
                                <td>{res.name}</td>
                                <td>{res.points}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}