import React, { useRef, useState } from "react";
import "./question1.css";
// import { Link } from 'react-router-dom'
import photo1 from "../../assets/FM4vSVqVQAIbB_5.jpg";
import { Header } from "../header/Header";
import {NextQuestion} from "../next_question/NextQuestion";

export function Question1() {
  const [khuylo, setKhuylo] = useState("khuylo");
  const [president, setPresident] = useState("president");
  const [flip, setFlip] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [hideCor, setHideCor] = useState(false);
  const [hideIncor, setHideIncor] = useState(false);
  const [next, setNext] = useState(false)


  const frontEl = useRef();
  const backEl = useRef();
  const wrongEl = useRef();

  const onKhuyloChange = (e) => {
    console.log(e.target.value);
    setKhuylo(e.target.value);
    setFlip(!flip);
    setHideCor(hiddenCorrect);  
    setNext(!next)
  };

  const hiddenCorrect = {
      left: hideCor ? '-900px' : ''
  }
  const hiddenInorrect = {
    left: hideIncor ? '-900px' : ''
}

  const onPresidentChange = (e) => {
    console.log(e.target.value);
    setPresident(e.target.value);
    setWrong(!wrong);
    setHideIncor(hiddenInorrect);
    setFlip(!flip);
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className={`card ${flip ? "flip" : ""}`}>
          <div className="front" ref={frontEl}>
            <div className="wrap-queation1">
              <h1>Who is this?</h1>
              <img src={photo1} width="200px" alt=""></img>
            </div>

            <div className="center-position">
              <div className="center-position">
                <form>
                  <input
                    type={"radio"}
                    name="option"
                    value={khuylo}
                    onChange={onKhuyloChange}
                  />
                  <label>Khuylo</label>
                  <br></br>
                  <input
                    type={"radio"}
                    name="option"
                    value={president}
                    onChange={onPresidentChange}
                  />
                  <label>president</label>
                </form>
              </div>
            </div>
          </div>
          <div className="back" style={hiddenInorrect} ref={backEl}>
            <h2>Good job!</h2>
            <button onClick={()=> {
                window.location.reload(true)
                setFlip(!flip)
            }}>Back</button>
          </div>

          <div className={`incorrect ${wrong ? 'wrong' : ''}`} style={hiddenCorrect} ref={wrongEl}>
            <h3>This is the wrong answer</h3>
            <h2>Think again!</h2>
            <button onClick={()=> {
                window.location.reload(true)
                setFlip(!flip)
            }}>Back</button>
          </div>

        </div>
      </div>

      <div className="button-block center-position">
        {  
            next ?  <NextQuestion/> : ''            
        }
          
        
        
      </div>
    </div>
  );
}
