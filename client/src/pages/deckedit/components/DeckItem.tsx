import React from 'react'
import { Link } from 'react-router-dom';

const decks = [[],[]];
interface DeckItemProps {
  deckName: string;
}
function DeckItem({ deckName }: DeckItemProps) {
  return (
    <Link to={'/'}>{deckName}</Link>
  )
}

export default DeckItem