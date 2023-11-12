import Carte from "../interfaces/carte"

interface SearchItemProps {
  card: Carte
}

function SearchItem({ card }: SearchItemProps) {

  return (
    <button className="SearchItem">

      <img className="SearchCardImage" src={"public/yugioh-piege.png"} alt={card.Nom + "image"} />
      <div className="CardStats">
        <h3>{card.Nom}</h3>
        <p>{card.Type}</p>
        <div>{card.Atk && card.Atk +" / "+ card.Def}</div>
      </div>
    </button>
  )
}

export default SearchItem