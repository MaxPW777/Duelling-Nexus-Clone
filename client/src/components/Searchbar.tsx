import "../styles/Searchbar.css"
import SearchForm from "./SearchForm"
import SearchItem from "./SearchItem"
import Carte from "../interfaces/carte"
import { useCallback } from 'react';

interface SearchbarProps {
  cartes?: Carte[];
  setCard: (card: Carte) => void;
}

function Searchbar({ cartes, setCard }: SearchbarProps) {
  const memoizedSetCard = useCallback(setCard, [setCard]);

  return (
    <div className="Searchbar">
      <SearchForm />
      <div className="SearchItems">
        {cartes
          ? cartes.map((card: any) => (
              <SearchItem key={card.id} setCard={memoizedSetCard} card={card} />
            ))
          : <p> flop </p>}
      </div>
    </div>
  );
}


export default Searchbar