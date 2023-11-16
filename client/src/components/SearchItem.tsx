import Carte from "../interfaces/carte"

interface SearchItemProps {
  card: Carte;
  setCard: (card: Carte) => void;
}

function SearchItem({ card, setCard }: SearchItemProps) {
  function handleMouseEnter() {
    setCard(card);
  }

  return (
    <button className="SearchItem" onClick={handleMouseEnter}>
      <img
        className="SearchCardImage"
        src={`public/yugioh-${card.Type.toLowerCase()}.png`}
        alt={card.Nom + "image"}
      />
      <div className="CardStats">
        <h3>{card.Nom}</h3>
        <p>{card.Type}</p>
        <div>{card.Atk && card.Atk + " / " + card.Def}</div>
      </div>
    </button>
  );
}


export default SearchItem
