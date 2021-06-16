import { React, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { getToken } from '../utils/auth';
import Queue from '../utils/queue';

export default  function Ranking() {

    const rankingQueue = new Queue();

    const url = 'http://localhost:8060/v1/rankings'
    const token = getToken();
    const options = {
        method: 'get',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

    const [queue, setQueue] = useState(new Queue());

    async function setDataInQueue(data){
        data.forEach(element => {
            rankingQueue.inserting(element);
        });

        setQueue(rankingQueue);
    }
    
    useEffect(async () => {
        let res = await fetch(url, options);
        let data = await res.json();
        
        console.log(data);
        await setDataInQueue(data);

            console.log(`${rankingQueue.next()} elementos inseridos`);
   }, []);



    return (
        <Container id="container">
         { rankingQueue ? 
         console.log("jair lindo", queue.next()) : console.log("jair gatao")
        }
        </Container>
    );
}