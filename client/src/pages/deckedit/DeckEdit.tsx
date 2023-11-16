import React from 'react'
import Leaderboard from './components/Leaderboard'
import Decklist from './components/Decklist'
import './DeckEdit.css'

function DeckEdit() {
  return (
    <div className='content'>
        <Leaderboard />
        <Decklist />
    </div>
  )
}

export default DeckEdit