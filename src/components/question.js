import React from 'react';
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';
import { createAnswer } from '../pages/answer/answerService/answerService'
import { questionRequest } from '../pages/question/service/questionService'
import '../index.css';
import { InputGroup, Label, InputGroupText, Button, Input, FormGroup, Jumbotron } from 'reactstrap';
import Header from './header';
import Queue from '../utils/queue';
import { removePoints } from '../utils/auth';

export default class QuestionPanel extends React.Component {
  constructor(props) {
    super(props);
    this.queue = new Queue();
    this.setQuestions();
    removePoints();
  }

  async setQuestions() {
    this.queue = await questionRequest();
    this.setState({
      questions: this.queue,
      question: this.queue.next(),
      size: 1,
    });
    console.log(this.state);
  }

  render() {
    return (
      <Container>
        <Header />
        <div className="inform">
          <Jumbotron>
            <p className="questions">
              {this.state && this.state.question && this.state.question.question}
            </p>
          </Jumbotron>
          <br /><br />
          <Jumbotron>

            <InputGroup xs="auto">
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" onChange={e => { this.setState({ alternative: this.state.question.alternatives[0].id }) }} />
                </Label>
              </FormGroup>
              <Input className="alternativa" value={this.state && this.state.question && this.state.question.alternatives[0] && this.state.question.alternatives[0].alternative}
              />
            </InputGroup>

            <InputGroup xs="auto">
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" onChange={e => { this.setState({ alternative: this.state.question.alternatives[1].id }) }} />
                </Label>
              </FormGroup>
              <Input className="alternativa" value={this.state && this.state.question && this.state.question.alternatives[1] && this.state.question.alternatives[1].alternative}
              />
            </InputGroup>

            <InputGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" onChange={e => { this.setState({ alternative: this.state.question.alternatives[2].id }) }} />
                </Label>
              </FormGroup>
              <Input className="alternativa" value={this.state && this.state.question && this.state.question.alternatives[2] && this.state.question.alternatives[2].alternative}
              />
            </InputGroup>

            <InputGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" onChange={e => { this.setState({ alternative: this.state.question.alternatives[3].id }) }} />
                </Label>
              </FormGroup>
              <Input className="alternativa" value={this.state && this.state.question && this.state.question.alternatives[3] && this.state.question.alternatives[3].alternative}

              />
            </InputGroup>

            <InputGroup>
              <FormGroup check>
                <Label  >
                  <Input
                    type="radio" name="radio1" onChange={e => { this.setState({ alternative: this.state.question.alternatives[4].id }) }} />
                </Label>
              </FormGroup>
              <Input
                className="alternativa"
                value={this.state && this.state.question && this.state.question.alternatives[4]
                  && this.state.question.alternatives[4].alternative}

              />
            </InputGroup>
          </Jumbotron>
          <br />
          <Button color="info" onClick={async () => {
            if (this.state.size === 10) {
              window.location.href = '/points';
            }

            let data = await createAnswer(this.state.alternative);
            console.log(data);
            if (data.status !== 200) {
              this.setState({
                question: this.queue.next()
              })
              return;
            }
            if (this.queue.next() != null) {
              this.queue.removing();
              this.setState({
                question: this.queue.next(),
                size: this.state.size + 1
              })
              console.log(this.state);
            }
          }}>Próximo</Button>
        </div>
        <footer />
      </Container>
    );
  }
}