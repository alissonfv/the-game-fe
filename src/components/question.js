import React from 'react';
import { Navbar, NavbarBrand, Button } from 'react-bootstrap';
import { createAnswer } from '../pages/answer/answerService/answerService'
import { questionRequest } from '../pages/question/service/questionService'
import '../index.css';
import { InputGroup, Label, InputGroupText, Input, FormGroup, Jumbotron } from 'reactstrap';
import Queue from '../utils/queue';
import { Alert } from 'bootstrap';

export default class QuestionPanel extends React.Component {
  constructor(props) {
    super(props);

    this.setQuestions();
  }

  async setQuestions() {
    var data = await questionRequest();
    this.setState({
      questions: data,
      question: data[0],
      size: 1,
    });
    console.log(this.state);
  }

  render() {
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
            console.log("IGHUUUULÇ", this.state.size)
            if(this.state.size === 10){
              // fazer chamada de outra tela com a pontuação do jovem :D
              alert("Voce ja respondeu todas as perguntas :D")
              return;
            }

            let data = await createAnswer(this.state.alternative);
            console.log(data);
            if (data.status !== 200) {
              this.setState({
                question: this.state.questions[0]
              })
              return;
            }
            if (this.state.size <= 10) {
              this.setState({
                question: this.state.questions[this.state.size],
                size: this.state.size + 1
              })
              console.log(this.state);
            }
          }}>Next</Button>
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
                  <Input type="radio" name="radio1" />
                </Label>
              </FormGroup>
              <Input className="alternativa" value={this.state && this.state.question && this.state.question.alternatives[1] && this.state.question.alternatives[1].alternative}
              />
            </InputGroup>

            <InputGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />
                </Label>
              </FormGroup>
              <Input className="alternativa" value={this.state && this.state.question && this.state.question.alternatives[2] && this.state.question.alternatives[2].alternative}
              />
            </InputGroup>

            <InputGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />
                </Label>
              </FormGroup>
              <Input className="alternativa" value={this.state && this.state.question && this.state.question.alternatives[3] && this.state.question.alternatives[3].alternative}

              />
            </InputGroup>

            <InputGroup>
              <FormGroup check>
                <Label  >
                  <Input
                    type="radio" name="radio1" />
                </Label>
              </FormGroup>
              <Input
                className="alternativa"
                value={this.state && this.state.question && this.state.question.alternatives[4]
                  && this.state.question.alternatives[4].alternative}

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
}