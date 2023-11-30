import Carte from "../../../interfaces/carte"

interface SearchItemProps {
  card: Carte;
  setCard: (card: Carte) => void;
}

function SearchItem({ card, setCard }: SearchItemProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>{
      setCard(card);
    
  };

  return (
    <button className="SearchItem" onContextMenu={handleClick} onClick={handleClick}>
      <div className="SearchCardContainer">
        <div className='CardImageSearch' data-id={card.ID}>
          <img
            className="CardContainerSearch"
            src={`public/yugioh-${card.Type.toLowerCase()}.png`}
            alt={card.Nom + "image"}
          />
          <div className='HeaderCardSearch'>{card.Nom} </div>
          <div>
            <img
              className='BodyCardSearch'
              src={`public/${card.Image}`}
            />
          </div>
          <div className='TypeCardSearch'>[{card.Type}]</div>
          <div className='DescriptionCardSearch'>{card.Description}</div>
        </div>
      </div>
      <div className="CardStats">
        <h3>{card.Nom}</h3>
        <p>{card.Type}</p>
        <div>{card.Atk && card.Atk + " / " + card.Def}</div>
      </div>
    </button>
  );
}


export default SearchItem
