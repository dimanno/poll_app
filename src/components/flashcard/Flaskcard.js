import React, { useEffect, useRef, useState} from 'react'

export function Flaskcard({flashcard}) {
  console.log(flashcard.question)
const [flip, setFlip] = useState(false)
const [height, setHeight] = useState('initial')

const frontEl = useRef();
const backEl = useRef();

function setMaxHeight() {
  const frontHeight = frontEl.current.getBoundingClientRect().height
  const backHeight = backEl.current.getBoundingClientRect().height
  setHeight(Math.max(frontHeight, backHeight, 300))
}

useEffect(setMaxHeight, [flashcard.question, flashcard.answer, flashcard.options])
useEffect(()=> {
  window.addEventListener('resize', setMaxHeight)
  return () => window.removeEventListener('resize', setMaxHeight)
}, [])

  return (
    <div 
    className={`card_quest ${flip ? 'flip' : ''}`}
    style={{height: height}}
    onClick={() => setFlip(!flip)}
    >
      <div className='front_quest' ref={frontEl}>
        <h3>{flashcard.question}</h3>
        <div>
          <img src={flashcard.img} alt='picture1' width='200px'></img>
          
        </div>
      
        <div className='flashcard-options'>
          {flashcard.options.map(option => <div className='flashcard-option'>{option}</div>)}
        </div>
      </div>
      <div className='back_quest' ref={backEl}>{flashcard.answer}</div>
        {/* {flip ? flashcard.answer : flashcard.question} */}
    </div>
  )
}
