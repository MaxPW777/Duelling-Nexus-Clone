import Carte from '../interfaces/carte';
export default DetailsCard;

interface DetailsCardComponentProps {
    carte: Carte;
}

function DetailsCard({ carte }: DetailsCardComponentProps) { // Composant Carte avec les détails de la carte
    console.log(carte);
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
            <div className='StatsCard'>{carte.Atk}</div>
            <div className='StatsCard'>{carte.Def}</div>
        </div>
    )
}