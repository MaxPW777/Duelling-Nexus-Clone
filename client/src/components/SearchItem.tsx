import { Carte } from "../interfaces/carte"

interface SearchItemProps {
  card?: Carte
}

function SearchItem({ card }: SearchItemProps) {
  return (
    <div className="SearchItem">
      <img src={""} alt={""} />
      <div className="CardInfo">
        <h3>{card?.Name}</h3>
      </div>
      <button>Add to Deck</button>
    </div>
  )
}

export default SearchItem