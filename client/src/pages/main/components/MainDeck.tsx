import { useEffect, useState } from 'react';
import DetailsCard from './DetailsCard';
import CarteDeck from '../../../interfaces/carteDeck';
import '../styles/CardInfo.css';
import '../styles/MainDeck.css';


interface MainDeckProps {
  cartes: CarteDeck[];
}

function MainDeck({cartes}: MainDeckProps) {

  let cards = cartes;

  // Si les données ne sont pas disponibles, n'affichez pas le composant
  if (!cards || cards.length === 0) {
    return null;
  }

  return (
    <div className='MainDeck'>
      {cards.map((card: CarteDeck, index:number) => (
        <DetailsCard key={index} carte={card} index={index} />
      ))}
    </div>
  );
}

export default MainDeck;
