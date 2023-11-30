import React, { useEffect, useState } from 'react'
import CryptoJS from 'crypto-js';
import DeckItem from './DeckItem';
import DeckName from '../../../interfaces/deckName';



function Decklist() {
  const idFromLocalStorage: string = localStorage.getItem('userId') || '';
  // Déchiffrez l'ID depuis le localStorage
  const decryptedUserId = CryptoJS.AES.decrypt(idFromLocalStorage, 'your-secret-key').toString(CryptoJS.enc.Utf8);
  
  console.log('Déchiffré :', decryptedUserId);
  const [decklist, setDecklist] = useState<DeckName[]>();
  useEffect(() => {
    fetch(`http://localhost:3001/deckName/${decryptedUserId}`)
      .then((response) => response.json())
      .then((data) => {
        setDecklist(data);
      });
  }, []);
  return (
    <div className='deckList'>
      {decklist ? (
        decklist.map((element, index) => (
          <DeckItem key={index} deckName={element.Nom_Deck} />
        ))
      ) : (
        <div>Aucun DECK</div>
      )}
    </div>
  );
  
  
}

export default Decklist