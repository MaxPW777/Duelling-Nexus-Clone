import { useEffect, useState } from "react";
import "../styles/CardInfo.css"
import DetailsCard from "./DetailsCard";

function CardInfo() {
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
  return (
    <div className='CardInfo'> <DetailsCard carte = {cards[0]}/></div> // variable carte à remplacer par la position de la souris sur une carte dans le deck (index) de l'array du deck
  )
}

export default CardInfo