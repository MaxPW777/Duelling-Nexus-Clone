import "../styles/Searchbar.css"
import SearchForm from "./SearchForm"
import SearchItem from "./SearchItem"
import Carte from "../interfaces/carte"
interface SearchbarProps {
  cartes?: Carte[]
}

function Searchbar({ cartes }: SearchbarProps) {
  return (
    <div className='Searchbar'>
      <SearchForm />
      <div className="SearchItems">
        {cartes ? cartes.map((card: any) => {
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