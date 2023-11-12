import Carte from "../interfaces/carte"

interface SearchItemProps {
  card: Carte
}

function SearchItem({ card }: SearchItemProps) {

  return (
    <button className="SearchItem">

      <img className="SearchCardImage" src={"public/yugioh-monstre.png"} alt={card.Nom + "image"} />
      <div className="CardInfo">
        <h3>{card.Nom}</h3>
        <p>{card.Type}</p>
        <div>{card.Atk +" / "+ card.Def}</div>
      </div>
    </button>
  )
}

export default SearchItem