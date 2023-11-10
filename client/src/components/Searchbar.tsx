import "../styles/Searchbar.css"
import SearchForm from "./SearchForm"
import SearchItem from "./SearchItem"

interface SearchbarProps {
  cards?: any
}

function Searchbar({ cards }: SearchbarProps) {
  return (
    <div className='Searchbar'>
      <SearchForm />
      <div className="SearchResults">
        {cards ? cards.map((card: any) => {
          return (
            <SearchItem />
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