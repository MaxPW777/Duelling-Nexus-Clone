import "../styles/CardInfo.css"
import Carte from "../interfaces/carte"
interface CardInfoProps {
  carte?: Carte;
}

function CardInfo({ carte }: CardInfoProps) {
  return (
    <div className="CardInfo">
      {carte ? (
        <h3>{carte.Nom}</h3>
      ) : (
        <p>Hover on a card to see its stats</p>
      )}
    </div>
  )
}

export default CardInfo