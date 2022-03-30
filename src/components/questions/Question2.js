import React, { useRef, useState } from "react";
import "./question2.css";
import photo2 from "../../assets/image_slogan.jpeg";
import { Header } from "../header/Header";
import { NextQuestion } from "../next_question/NextQuestion";

export function Question2() {
  const [khuylo, setKhuylo] = useState("khuylo");
  const [slava, setSlava] = useState("slava");
  const [korabel, setsetKorabel] = useState("slava");
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
    setHideCor(hiddenCorrect );  
  };

  const hiddenCorrect = {
      left: hideCor ? '-900px' : ''
  }
  const hiddenInorrect = {
    left: hideIncor ? '-900px' : ''
}

  const onSlavaUkrainiChange = (e) => {
    console.log(e.target.value);
    setSlava(e.target.value);
    setWrong(!wrong);
    setHideIncor(hiddenCorrect);
    setFlip(!flip);
    setNext(!next)
  }

  const onRuskiyKorabelChange = (e) => {
    console.log(e.target.value);
    setsetKorabel(e.target.value);
    setFlip(!flip);
    setHideCor(hiddenCorrect);  
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className={`card ${flip ? "flip" : ""}`}>
          <div className="front" ref={frontEl}>
            <div className="wrap-queation1">
              <h1>What is the Ukrainian national slogan?</h1>
              <img src={photo2} width="200px" alt=""></img>
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
                  <label>Putin Khuylo!</label>
                  <br></br>
                  <input
                    type={"radio"}
                    name="option"
                    value={slava}
                    onChange={onSlavaUkrainiChange}
                  />
                  <label>Slava Ukraini!</label>
                  <br></br>
                  <input
                    type={"radio"}
                    name="option"
                    value={korabel}
                    onChange={onRuskiyKorabelChange}
                  />
                  <label>Ruskiy voyenyj korabel idi nakhuy!</label>
                </form>
              </div>
            </div>
          </div>
          <div className="back" style={hiddenCorrect} ref={backEl}>
            <h2>Good job!</h2>
            <button onClick={()=> {
                window.location.reload(true)
                setFlip(!flip)
            }}>Back</button>
          </div>

          <div className={`incorrect ${wrong ? 'wrong' : ''}`} style={hiddenInorrect} ref={wrongEl}>
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