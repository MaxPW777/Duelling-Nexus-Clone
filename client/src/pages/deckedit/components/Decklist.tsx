import React from 'react'
import CryptoJS from 'crypto-js';
function Decklist() {
  const idFromLocalStorage : string = localStorage.getItem('userId') || '';
  // Déchiffrez l'ID depuis le localStorage
  const decryptedUserId = CryptoJS.AES.decrypt(idFromLocalStorage, 'your-secret-key').toString(CryptoJS.enc.Utf8);
  console.log('Déchiffré :', decryptedUserId);
  return (
    <div className='deckList'>
      
    </div>
  )
}

export default Decklist