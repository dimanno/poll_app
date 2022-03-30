import React from 'react'
import './quest_list.css'
import { Flaskcard } from '../flashcard/Flaskcard'

export function QuestList({flashcards}) {

  return (
    <div className='card-grid'>
      {flashcards.map(flashcard => <Flaskcard flashcard={flashcard} key={flashcard.id}/>)}
    </div>
  )
}
