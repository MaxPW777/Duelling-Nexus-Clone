import './styles/App.css'
import CardInfo from './components/CardInfo'
import Deck from './components/Deck'
import Header from './components/Header'
import Searchbar from './components/Searchbar'
import Carte from './interfaces/carte'

const cartes: Carte[] = [{ Name: "test", Atk: 0, Def: 0, image: "test", ID: 0, Type: "prisonnier", Description: "floppy", Rarete: "commune"}]

function App() {

  return (
    <>
      <Header />
      <CardInfo />
      <Deck />
      <Searchbar cartes={cartes} />
    </>
  )
}

export default App
