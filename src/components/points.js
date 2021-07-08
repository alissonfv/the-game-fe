import { React, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../index.css';
import { getPoints } from '../utils/auth';
import { Jumbotron } from 'reactstrap';
import Header from './header';


export default function Points() {

    
    return (
    <>
        <Header/>
            <Jumbotron> 
              <h1 className="display-2">O The Game agradece sua dedicação!!!</h1>
              <div className="textSend">
                <p>
                    Parabéns por concluir as questões... Você acertou {getPoints() ? getPoints() : 0}/10 e sua pontuação total foi de: {getPoints() ? getPoints() : 0}
                </p>
              </div>
              <hr className="my-2" />          
            </Jumbotron>  
        </>        
    );

}


