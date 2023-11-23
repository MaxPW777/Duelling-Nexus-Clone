import CryptoJS from 'crypto-js';
import React, { useEffect, useState } from 'react'
import { set } from 'react-hook-form'
import { Link } from 'react-router-dom';

type Deck = {
  DeckID: number,
  DeckNom: string,
  DeckDescription: string
}

function Decklist() {
  const idFromLocalStorage: string = localStorage.getItem('userId') || '';
  // Déchiffrez l'ID depuis le localStorage
  const decryptedUserId = CryptoJS.AES.decrypt(idFromLocalStorage, 'your-secret-key').toString(CryptoJS.enc.Utf8);
  const [deck, setDeck] = useState<Deck[]>([])

  useEffect(() => {
    fetch('http://localhost:3001/deckID/' + decryptedUserId)
      .then(res => res.json())
      .then(data => setDeck(data))
  }, [])

  return (
    <div className='deckList'>
      {
        deck && deck.map((deck) => {
          return (
            <Link to={'/'} onClick={() => {localStorage.setItem("deckID", deck.DeckID.toString()) }} className='deck' key={deck.DeckID}>
              <h3>{deck.DeckNom}</h3>
              <p>{deck.DeckDescription}</p>
            </Link>
          )
        })
      }

    </div>
  )
}

export default Decklist