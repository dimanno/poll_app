import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import { Header } from '../header/Header'


export function Home() {
  return (
    <div className='wrap-home'>
         <Header /> 
      <h1>Simple ukrainian poll</h1>
      <div className='d-flex'>
        <div className='start'>
          <Link to={'/question_1'}>Start</Link>
        </div>
      </div>
    </div>
  )
}
