import React from 'react'
import CryptoJS from 'crypto-js';
import Leaderboard from './components/Leaderboard'
import Decklist from './components/Decklist'
import './DeckEdit.css'

function DeckEdit() {
  const idFromLocalStorage : string = localStorage.getItem('userId') || '';
  // Déchiffrez l'ID depuis le localStorage
  const decryptedUserId = CryptoJS.AES.decrypt(idFromLocalStorage, 'your-secret-key').toString(CryptoJS.enc.Utf8);
  console.log('Déchiffré :', decryptedUserId);
  return (
    <div className='content'>
        <Leaderboard />
        <Decklist />
    </div>
  )
}

export default DeckEdit