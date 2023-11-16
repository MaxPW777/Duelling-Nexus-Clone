import Carte from '../interfaces/carte';
import CarteDeck from '../interfaces/carteDeck';
export default DetailsCard;

interface DetailsCardComponentProps {
    carte: Carte | CarteDeck;
}

function DetailsCard({ carte }: DetailsCardComponentProps) { // Composant Carte avec les détails de la carte
    return (

        <div className='CardImage' data-id={carte.ID} >
            <img
                className="CardContainer"
                src={`public/yugioh-${carte.Type.toLowerCase()}.png`}
                alt={carte.Nom + "image"}
            />
            <div className='HeaderCard'>{carte.Nom} </div>
            <div className='BodyCard'>{carte.image}</div>
            <div className='DescriptionCard'>{carte.Description}</div>
            <div className='TypeCard'>[{carte.Type}]</div>
            <div className='FooterCard'>{carte.Rarete}</div>
            <div className='StatsAtkCard'>{carte.Atk}</div>
            <div className='StatsDefCard'>/{carte.Def}</div>
        </div>
    )
}