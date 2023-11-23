import { useEffect, useState } from 'react';
import DetailsCard from './DetailsCard';
import CarteDeck from '../interfaces/carteDeck';
import '../styles/CardInfo.css';
import '../styles/MainDeck.css';


const deck: CarteDeck[] = [];

function MainDeck() {
  const [cards, setCards] = useState<CarteDeck[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3001/deck/1');
        const data = await res.json();

        data.forEach((element : CarteDeck) => {    
          for (let i = 0; i < element.Quantite; i++) {
            deck.push(element);
          }
        });
        setCards(deck);
        console.log(deck);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

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
