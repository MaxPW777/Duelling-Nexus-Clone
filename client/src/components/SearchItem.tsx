
interface SearchItemProps {
  card?: any
}

function SearchItem({ card }: SearchItemProps) {
  return (
    <div className="SearchItem">
              <img src={""} alt={""} />
              <div className="CardInfo">
                <h3>{card}</h3>
              </div>
              <button>Add to Deck</button>
            </div>
  )
}

export default SearchItem