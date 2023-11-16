import "../styles/Searchbar.css"
import SearchForm from "./SearchForm"
import SearchItem from "./SearchItem"
import Carte from "../interfaces/carte"
import { useCallback, useEffect, useState } from 'react';

interface SearchbarProps {
  cartes?: Carte[];
  setCard: (card: Carte) => void;
}

function Searchbar({ cartes, setCard }: SearchbarProps) {
  const [search, setSearch] = useState('');
  const [cartesFiltrees, setCartesFiltrees] = useState<Carte[]>(cartes || []);
  const memoizedSetCard = useCallback(setCard, [setCard]);

  useEffect(() => {
    if (cartes) {
      setCartesFiltrees(cartes.filter((card: Carte) => card.Nom.toLowerCase().includes(search.toLowerCase())));
    }
  }, [search]);
  return (
    <div className="Searchbar">
      <SearchForm setSearch={setSearch} />
      <div className="SearchItems">
        {cartes
          ? cartesFiltrees.map((card: Carte) => (
              <SearchItem key={card.ID} setCard={memoizedSetCard} card={card} />
            ))
          : <p> flop </p>}
      </div>
    </div>
  );
}


export default Searchbar