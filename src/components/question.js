import { React, useState, useEffect } from 'react';
import { Container, Navbar, NavbarBrand, Button } from 'react-bootstrap';
import { createAnswer } from '../pages/answer/answerService/answerService'
import { questionRequest } from '../pages/question/service/questionService'
import '../index.css';
import { InputGroup, Label, InputGroupText, Input, FormGroup, Jumbotron } from 'reactstrap';
import Queue from '../utils/queue';
import Header from './header';

export default function QuestionPanel() {

  const [questions, setQuestions] = useState(new Queue());
  const [question, setQuestion] = useState();
  const [alternative, setAlternative] = useState(null);

  useEffect(() => {
    async function getQuestions() {
      setQuestions(await questionRequest());
      console.log("QUESTIONS", questions);
      console.log("NEXT", questions.next());
      setQuestion(questions.next());
    }
    getQuestions();
  }, []);

  return (
    <Container>
      <Header />
      <div className="inform">
        <Button onClick={async () => {
          console.log("QUESTION", question);
          let data = await createAnswer()

          if (data.status === 200) {
            if (questions.elements.length > 1) {
              questions.removing();
              setQuestion(questions.next());
            };
          }

        }}>Next</Button>
        <Jumbotron>
          <p className="questions">{
            // question && question.question
          }</p>
        </Jumbotron>
        <br /><br />
        <Jumbotron>

          <InputGroup xs="auto">
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
              </Label>
            </FormGroup>
            <Input className="alternativa" placeholder="Alternativa 2"
            />
          </InputGroup>

          <InputGroup xs="auto">
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
              </Label>
            </FormGroup>
            <Input className="alternativa" placeholder="Alternativa 2"
            />
          </InputGroup>

          <InputGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
              </Label>
            </FormGroup>
            <Input className="alternativa" placeholder="Alternativa 3"
            />
          </InputGroup>

          <InputGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
              </Label>
            </FormGroup>
            <Input className="alternativa" placeholder="Alternativa 4"

            />
          </InputGroup>

          <InputGroup>
            <FormGroup check>
              <Label  >
                <Input
                  type="radio" name="radio1" />{' '}
              </Label>
            </FormGroup>
            <Input className="alternativa" placeholder="Alternativa 5"

            />
          </InputGroup>
        </Jumbotron>
      </div>
      <footer />
    </Container>
  );
}