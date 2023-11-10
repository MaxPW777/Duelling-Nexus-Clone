import Carte from '../interfaces/carte';
export default DetailsCard;

interface DetailsCardComponentProps {
    carte: Carte;
}

function DetailsCard({ carte }: DetailsCardComponentProps) { // Composant Carte avec les détails de la carte
    return (
        <div className='Card' data-id={carte.ID} data-info='Hoverable'> 
            <div className='HeaderCard'>{carte.Name} </div>
            <div className='BodyCard'>{carte.image}</div>
            <div className='DescriptionCard'>{carte.Description}</div>
            <div className='TypeCard'>{carte.Type}</div>
            <div className='FooterCard'>{carte.Rarete}</div>
            <div className='StatsCard'>{carte.Atk}</div>
            <div className='StatsCard'>{carte.Def}</div>
        </div>
    )
}