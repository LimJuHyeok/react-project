import logo from "./logo.svg";
import "./main.css";
import "./App.css";
import { useState } from "react";
import { ProgressBar } from 'react-bootstrap';
import { RWebShare } from 'react-web-share';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

let page_number = 0;
const lis = [];

function ColorSchemesExample(props) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{
              props.onChangeMode()
            }}>Home</Nav.Link>
            <Nav.Link href="#features">Temp1</Nav.Link>
            <Nav.Link href="#pricing">Temp2</Nav.Link>
          </Nav>
        </Container>
      </Navbar><br /><br /><br />
    </>
  );
}
function TITLE() {
  return <h1 className="TITLE">TITLE</h1>;
}
function StartButton(props) {
  return (
    <p className="ButtonP">
      <input
        className="StartButton" type="button" value="Start"
        onClick={() => {
          alert("button");
          page_number = 1;
          console.log("page_number : ", page_number);
          props.onChangeMode();
        }}
      />
    </p>
  );
}
function MyProgressBar() {
  const now = page_number;
  return <ProgressBar max={10} animated now={now} />
}
function MyWebShare() {
  return (
    <div>
      <RWebShare
        data={{
          text: "Like humans, flamingos make friends for life",
          url: "https://on.natgeo.com/2zHaNup",
          title: "Flamingos",
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <button>
          <span>Share</span>
        </button>
      </RWebShare>
    </div>
  );
}
function App() {
  const [mode, setMode] = useState(0);
  
  for (let i = 1; i < 10; i++) {
    switch (Number(mode)) {
      case i:
        return (
          <div>
            <ColorSchemesExample onChangeMode={()=>{
              console.log('Home');
              page_number = 0;
              setMode(page_number);
            }}></ColorSchemesExample>
            <h2 className="Question">Question.{i}</h2>
            <br />
            <p className="AnswerP">
              <input
                type="button"
                value="Answer 1"
                onClick={() => {
                  const templis = [];
                  lis.push(1);
                  page_number++;
                  setMode(Number(page_number));
                }}
              />
            </p>
            <p className="AnswerP">
              <input
                type="button"
                value="Answer 2"
                onClick={() => {
                  lis.push(2);
                  page_number++;
                  setMode(Number(page_number));
                }}
              />
            </p>
            {console.log(lis)}
            <MyProgressBar></MyProgressBar>
          </div>
        );
        case 10: // result screen
          return(
            <div>
              <ColorSchemesExample onChangeMode={()=>{
              console.log('Home');
              page_number = 0;
              setMode(page_number);
            }}></ColorSchemesExample>
              <h2>Your Answer List</h2>
              {lis}
              <MyWebShare></MyWebShare>
            </div>
          );
    }
  }
  return (
    <div>
      <ColorSchemesExample onChangeMode={()=>{
              page_number = 0;
              setMode(page_number);
            }}></ColorSchemesExample>
      <TITLE></TITLE>
      <StartButton
        onChangeMode={() => {
          console.log("Button Clicked");
          setMode(Number(page_number));
        }}
      ></StartButton>
    </div>
  );
}
export default App;