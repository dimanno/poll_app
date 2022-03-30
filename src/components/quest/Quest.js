import './quest.css'
import React, { useState } from 'react'

import {FLASH_CARDS} from '../../db_questions'
import { QuestList } from '../quest_list/QuestList'
import { Header } from '../header/Header'

export function Quest() {
  const [flashcards, setFlashcards] = useState(FLASH_CARDS)
  console.log(flashcards)

  return (
    <div>
      <Header/>
      <div className='container_quest'>
        <QuestList flashcards={flashcards} />
      </div>
      
    </div>
  )
}
