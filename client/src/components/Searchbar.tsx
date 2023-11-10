import "../styles/Searchbar.css"
import SearchForm from "./SearchForm"
import SearchItem from "./SearchItem"
import Carte from "../interfaces/carte"
interface SearchbarProps {
  cards?: Carte[]
}

function Searchbar({ cards }: SearchbarProps) {
  return (
    <div className='Searchbar'>
      <SearchForm />
      <div className="SearchItems">
        {cards ? cards.map((card: any) => {
          return (
            <SearchItem card={card} />
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