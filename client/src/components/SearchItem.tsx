import Carte from "../interfaces/carte"

interface SearchItemProps {
  card?: Carte
}

function SearchItem({ card }: SearchItemProps) {

  return (
    <button  className="SearchItem">
      
      <img src={card?.image} alt={card?.Name + "image"} />
      <div className="CardInfo">
        <h3>{card?.Name}</h3>
        <p>{card?.Atk}</p>
        <p>{card?.Def}</p>
      </div>
    </button>
  )
}

export default SearchItem