import './styles/App.css'
import CardInfo from './components/CardInfo'
import Deck from './components/Deck'
import Header from './components/Header'
import Searchbar from './components/Searchbar'
import Carte from '../../interfaces/carte'
import { useEffect, useState } from 'react'
import CarteDeck from '../../interfaces/carteDeck'



function App() {
  const [card, setCard] = useState<Carte>()
  const [cards, setCards] = useState<CarteDeck[]>([])
  let deck: CarteDeck[] = [];

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
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <CardInfo carte={card} />
      <Deck cartes={cards} />
      <Searchbar setCard={setCard} cartes={cards} />
    </>
  )
}

export default App
