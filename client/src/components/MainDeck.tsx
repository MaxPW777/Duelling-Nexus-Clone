import { useEffect, useState } from 'react';
import '../styles/MainDeck.css';
const deck: any[] = [];

function MainDeck() {
  const [cards, setCards] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3001/deck/1');
        const data = await res.json();

        data.forEach((element: { Quantite: number; }) => {    
          for (let i = 0; i < element.Quantite; i++) {
            deck.push(element);
          }
        });
        setCards(deck);
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
      {cards.map((card: any) => (
        console.log(card),
        <p>{card.CarteNom}</p>
      ))}
    </div>
  );
}

export default MainDeck;
