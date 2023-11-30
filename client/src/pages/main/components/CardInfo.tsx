import "../styles/CardInfo.css"
import Carte from "../../../interfaces/carte"
import DetailsCard from "./DetailsCard";
interface CardInfoProps {
  carte?: Carte;
  index? : number;
}

function CardInfo({ carte, index }: CardInfoProps) {
  return (
    <div className="CardInfo">
      {carte ? (
        <DetailsCard index={index? index : 0} carte={carte} />
      ) : (
        <p>Hover on a card to see its stats</p>
      )}
      {carte ? (
        <div className="CardInfoDescription">{carte.Description}</div>
      ) : (
        <p></p>
      )}
    </div>
  )
}

export default CardInfo