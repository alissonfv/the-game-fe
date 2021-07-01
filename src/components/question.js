import { React, useState, useEffect } from 'react';
import { Navbar, NavbarBrand, Button } from 'react-bootstrap';
import { createAnswer } from '../pages/answer/answerService/answerService'
import { questionRequest, questionRequestById } from '../pages/question/service/questionService'
import '../index.css';
import { InputGroup, Label, InputGroupText, Input, FormGroup, Jumbotron } from 'reactstrap';
import Queue from '../utils/queue';

export default function QuestionPanel() {

  const [questionIdQueue, setQuestionIdQueue] = useState(new Queue());
  const [question, setQuestion] = useState();
  const [alternative, setAlternative] = useState(null);
  const [id, setId] = useState();

  useEffect(() => {
    console.log("linha 17-useEffect")
    if (questionIdQueue.elements.length === 0) {
      async function getQuestionIdQueue() {
        setQuestionIdQueue(await questionRequest());
        console.log("QUEUE", questionIdQueue)
      }
      console.log("Linha 22", id)
      setId(questionIdQueue.next());
      console.log("Linha 24", id)
      getQuestionIdQueue();
    } else {
      async function getQuestionById() {
        setQuestion(await questionRequestById(id));
        console.log("Linha 31", id)
        console.log("QUEUE", questionIdQueue)

      }
      getQuestionById();
    }
  }, [id]);
  
  return (
    <div>
      <div className="cabecalho">
        <Navbar className="nav" light expand="md">
          <NavbarBrand href="/question">Jogar</NavbarBrand>
          <NavbarBrand href="/ranking">Ranking</NavbarBrand>


        </Navbar>
      </div>
      <div className="inform">
        <Button onClick={async () => {
          let data = await createAnswer()

          if (data.status === 200) {
            console.log("Antes", questionIdQueue.next());
            if (questionIdQueue.elements.length > 1) {
              questionIdQueue.removing();
            };
            console.log("Linha 54", id);
            setId(questionIdQueue.next());
            console.log("Linha 55", id);
          }

        }}>Next</Button>
        <Jumbotron>
          <p className="questions">{question && question.question}</p>
        </Jumbotron>
        <br /><br />
        <Jumbotron>

          <InputGroup xs="auto">
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
              </Label>
            </FormGroup>
            <Input className="alternativa" placeholder="Alternativa 2" value={question
              && question.alternatives
              && question.alternatives[0]
              && question.alternatives[0].alternative} />
          </InputGroup>

          <InputGroup xs="auto">
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
              </Label>
            </FormGroup>
            <Input className="alternativa" placeholder="Alternativa 2" value={question
              && question.alternatives
              && question.alternatives[1]
              && question.alternatives[1].alternative} />
          </InputGroup>

          <InputGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
              </Label>
            </FormGroup>
            <Input className="alternativa" placeholder="Alternativa 3" value={question
              && question.alternatives
              && question.alternatives[2] && question.alternatives[2].alternative} />
          </InputGroup>

          <InputGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
              </Label>
            </FormGroup>
            <Input className="alternativa" placeholder="Alternativa 4"
              value={question && question.alternatives
                && question.alternatives[3]
                && question.alternatives[3].alternative}
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
              value={question && question.alternatives
                && question.alternatives[4]
                && question.alternatives[4].alternative}
            />
          </InputGroup>
        </Jumbotron>
      </div>
      <div className="footer">
        <p>Copyright</p>
      </div>
    </div>
  );
}