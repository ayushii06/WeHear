import React from 'react'
import { Link } from 'react-router-dom'
import '../Input/input.css'
import QuizPage from '../QuizPage/QuizPage'

function Input() {
  return (
    <>
    <div className="text-center">
    <p className='appname font-bold'>Great! You're now registered</p>
    <p className="h-1">Let's take a small test.</p>
    <p className="h-2">(Don't worry...It’s not your school test :)</p>
    <p className="h-1">Answer the questions as your heart says !</p>
    <div className="input-container">
       <QuizPage></QuizPage>
       <QuizPage></QuizPage>
       <QuizPage></QuizPage>
       <QuizPage></QuizPage>
       <QuizPage></QuizPage>
       <QuizPage></QuizPage>
    </div>
    </div>
    </>
  )
}

export default Input