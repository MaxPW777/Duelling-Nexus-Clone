import "../styles/CardInfo.css"
import Carte from "../../../interfaces/carte"
import DetailsCard from "./DetailsCard";
interface CardInfoProps {
  carte?: Carte;
}

function CardInfo({ carte }: CardInfoProps) {
  return (
    <div className="CardInfo">
      {carte ? (
        <DetailsCard carte={carte} index={0} />
      ) : (
        <p>Hover on a card to see its stats</p>
      )}
    </div>
  )
}


export default CardInfo