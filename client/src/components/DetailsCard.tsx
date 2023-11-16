import Carte from '../interfaces/carte';
import CarteDeck from '../interfaces/carteDeck';
export default DetailsCard;

interface DetailsCardComponentProps {
    carte: Carte | CarteDeck;
    key: number ;
}

function DetailsCard({ carte, key }: DetailsCardComponentProps) {
    console.log(carte);
    if ('Quantite' in carte) {
        return (
            <div className='CardImageDeck' data-id={carte.ID} style={{transform:`translateX(-${10*key}px)`}} >
                <img
                    className="CardContainerDeck"
                    src={`public/yugioh-${carte.Type.toLowerCase()}.png`}
                    alt={carte.Nom + "image"}
                />
                <div className='HeaderCardDeck'>{carte.Nom} </div>
                <div className='BodyCardDeck'>{carte.image}</div>
                <div className='DescriptionCardDeck'>{carte.Description}</div>
                <div className='TypeCardDeck'>[{carte.Type}]</div>
                <div className='FooterCardDeck'>{carte.Rarete}</div>
                <div className='StatsAtkCardDeck'>{carte.Atk}</div>
                <div className='StatsDefCardDeck'>/{carte.Def}</div>
            </div>
        );
    } else {
        return (
            <div className='CardImage' data-id={carte.ID}>
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
        );
    }
}
