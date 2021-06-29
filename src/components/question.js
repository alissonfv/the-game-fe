import { React, useState, useEffect } from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import { questionRequest,questionRequestById } from '../pages/question/service/questionService'
import '../index.css';
import { InputGroup, Label, InputGroupText, Input, FormGroup, Jumbotron } from 'reactstrap';
import Queue from '../utils/queue';

export default function QuestionPanel() {
  const [questionIdQueue, setQuestionIdQueue] = useState(new Queue());
  const [question, setQuestion] = useState();

  useEffect(() => {
    if (questionIdQueue.elements.length === 0) {
      async function getQuestionIdQueue() {
        setQuestionIdQueue(await questionRequest());
      }
      getQuestionIdQueue();
    } else {
      async function getQuestionById(){
        setQuestion(await questionRequestById(questionIdQueue.next()));
      }
      getQuestionById();
    }
  }, [questionIdQueue.next()]);

  return (
    <div>
      <div class="cabecalho">
        <Navbar class="nav" light expand="md">
          <NavbarBrand href="/question">Jogar</NavbarBrand>
          <NavbarBrand href="/ranking">Ranking</NavbarBrand>
        </Navbar>
      </div>
      <div className="inform">
        <Jumbotron>
            <p class="question">{question.question}</p>
        </Jumbotron>
        <br /><br />
        <Jumbotron>
          <InputGroup xs="2">
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
              </Label>
            </FormGroup>
          </InputGroup>

          <InputGroup xs="auto">
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
              </Label>
            </FormGroup>
            <Input class="alternativa" placeholder="Alternativa 2" />
          </InputGroup>

          <InputGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
              </Label>
            </FormGroup>
            <Input class="alternativa" placeholder="Alternativa 3" />
          </InputGroup>

          <InputGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
              </Label>
            </FormGroup>
            <Input class="alternativa" placeholder="Alternativa 4" />
          </InputGroup>

          <InputGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
              </Label>
            </FormGroup>
            <Input class="alternativa" placeholder="Alternativa 5" />
          </InputGroup>
        </Jumbotron>
      </div>
      <div class="footer">
        <p>Copyright</p>
      </div>
    </div>
  );
}