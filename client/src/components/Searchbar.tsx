import "../styles/Searchbar.css"

interface SearchbarProps {
  cards?: any
}

function Searchbar({ cards }: SearchbarProps) {
  return (
    <div className='Searchbar'>
      <div className="SearchForm">
        <input type="text" />
        <button>Search</button>
      </div>
      <div className="SearchResults">
        {cards ? cards.map((card: any) => {
          return (
            <div className="SearchItem">
              <img src={""} alt={""} />
              <div className="CardInfo">
                <h3>{card.name}</h3>
              </div>
              <button>Add to Deck</button>
            </div>
          )
        })
          :
          <p> flop </p>
        }
      </div>
    </div>
  )
}

export default Searchbar