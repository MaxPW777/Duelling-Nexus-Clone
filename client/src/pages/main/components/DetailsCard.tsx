import Carte from '../../../interfaces/carte';
import CarteDeck from '../../../interfaces/carteDeck';
export default DetailsCard;

interface DetailsCardComponentProps {
    carte: Carte | CarteDeck;
    index: number;
}

function DetailsCard({ carte, index }: DetailsCardComponentProps) {
    const cardsPerGroup = 6;
    const groupIndex = Math.floor(index / cardsPerGroup);
    const offsetHorizontal = (index % cardsPerGroup) + 1;
    const offsetVertical = groupIndex * 1; // Décalage vertical par groupe de six cartes
    if ('Quantite' in carte) {
        return (
            <div className='CardImageDeck' data-id={carte.ID} style={{ transform: ` translate(-${40 * offsetHorizontal}px, -${50 * offsetVertical}px)`  }}>
                <img
                    className="CardContainerDeck"
                    src={`public/yugioh-${carte.Type.toLowerCase()}.png`}
                    alt={carte.Nom + "image"}
                />
                <div className='HeaderCardDeck'>{carte.Nom} </div>
                <div >
                    <img
                        className='BodyCardDeck'
                        src={`public/${carte.Image}`}
                    />
                </div>
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
                <div>
                    <img
                        className='BodyCard'
                        src={`public/${carte.Image}`}
                    />
                </div>
                <div className='DescriptionCard'>{carte.Description}</div>
                <div className='TypeCard'>[{carte.Type}]</div>
                <div className='FooterCard'>{carte.Rarete}</div>
                <div className='StatsAtkCard'>{carte.Atk}</div>
                <div className='StatsDefCard'>/{carte.Def}</div>
            </div>
        );
    }
}
