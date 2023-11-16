import React, { useEffect, useState } from 'react';
import '../styles/MainDeck.css';

function MainDeck() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3001/');
        const data = await res.json();
        setCards(data);
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
      {/* Votre rendu de composant ici */}
    </div>
  );
}

export default MainDeck;
