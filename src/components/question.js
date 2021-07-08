import '../index.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import { InputGroup, Label, Button, Input, FormGroup, Jumbotron } from 'reactstrap';
import { createAnswer } from '../service/answerService'
import { questionRequest } from '../service/questionService'
import { removePoints } from '../utils/auth';
import Header from './header';
import Footer from './footer';
import Queue from '../utils/queue';

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
            <p className="question">
              {this.state && this.state.question && this.state.question.question}
            </p>
          </Jumbotron>
          <br /><br />
          <Jumbotron  >

            {this.state && this.state.question && this.state.question.alternatives ?
              this.state.question.alternatives.map(row => {
                return (
                  <InputGroup xs="auto">
                    <FormGroup check >
                      <Label check className="alternative"> {row && row.alternative}
                        <Input type="radio" name="radio1" onChange={e => {
                          this.setState({
                            alternative: row.id
                          })
                          console.log("radio 1", row.id)
                        }} />
                      </Label>
                    </FormGroup>
                  </InputGroup>
                )
              })
              : ""
            }

          </Jumbotron>
          <br />
          <Button color="info" onClick={async () => {
            if (this.state.size === 10) {
              window.location.href = '/points';
            }

            let data = await createAnswer(this.state.alternative);
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
                size: this.state.size + 1,
                alternative: -1
              })
              var inputs = document.querySelectorAll('input[type="radio"]');
              for (let i = 0; i < 5; i++) {
                inputs[i].checked = false;
              }
            }
          }}>Próximo</Button>
        </div>
        <Footer />
      </Container>
    );
  }
}