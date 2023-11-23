import CryptoJS from 'crypto-js';
import React, { useEffect, useState } from 'react'
import { set } from 'react-hook-form'

type Deck = {
  DeckID: number,
  DeckNom: string,
  DeckDescription: string
}

function Decklist() {
  const idFromLocalStorage: string = localStorage.getItem('userId') || '';
  // Déchiffrez l'ID depuis le localStorage
  const decryptedUserId = CryptoJS.AES.decrypt(idFromLocalStorage, 'your-secret-key').toString(CryptoJS.enc.Utf8);
  console.log('Déchiffré :', decryptedUserId);
  
  const [deck, setDeck] = useState<Deck[]>([])
  useEffect(() => {
    fetch('http://localhost:3001/deck')
      .then(res => res.json())
      .then(data => setDeck(data))
  }, []
  )
  return (
    <div className='deckList'>
      {
        deck && deck.map((deck) => {
          return (
            <div className='deck' key={deck.DeckID}>
              <h3>{deck.DeckNom}</h3>
              <p>{deck.DeckDescription}</p>
            </div>
          )
        })
      }

    </div>
  )
}

export default Decklist