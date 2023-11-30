import React from 'react'

const decks = [[],[]];
interface DeckItemProps {
  deckName: string;
}
function DeckItem({ deckName }: DeckItemProps) {
  return (
    <div>{deckName}</div>
  )
}

export default DeckItem