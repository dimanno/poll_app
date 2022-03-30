import './App.css';
import React from 'react';
import {Routes, Route,  } from 'react-router-dom'
import { Home } from './components/home/Home';
import {Quest} from './components/quest/Quest';
import { Question1 } from './components/questions/Question1';
import { Question2 } from './components/questions/Question2';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/question_1'} element={<Question1/>}/>
      <Route path={'/question_2'} element={<Question2/>}/>
      <Route path={'/quest'} element={<Quest/>}/>
    </Routes>
     
    </div>
  );
}

export default App;
