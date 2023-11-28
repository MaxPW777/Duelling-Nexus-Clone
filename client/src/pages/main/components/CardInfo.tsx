import "../styles/CardInfo.css"
import Carte from "../../../interfaces/carte"
import DetailsCard from "./DetailsCard";
interface CardInfoProps {
  carte?: Carte;
  index : number;
}

function CardInfo({ carte, index }: CardInfoProps) {
  return (
    <div className="CardInfo">
      {carte ? (
        <DetailsCard index={index} carte={carte} />
      ) : (
        <p>Hover on a card to see its stats</p>
      )}
    </div>
  )
}

export default CardInfo