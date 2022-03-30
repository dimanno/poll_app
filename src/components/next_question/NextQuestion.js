import React from 'react'
import { Link } from 'react-router-dom'

export function NextQuestion() {
  return (
    <button disabled className="next"  >
        <Link to={'/question_2' }>Next question</Link>
        </button>
  )
}
