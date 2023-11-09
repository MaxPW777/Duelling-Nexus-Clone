import './styles/App.css'
import CardInfo from './components/CardInfo'
import Deck from './components/Deck'
import Header from './components/Header'
import Searchbar from './components/Searchbar'

function App() {

  return (
    <>
    <Header />
    <div className="content">
      <CardInfo />
      <Deck />
      <Searchbar />
    </div>
    </>
  )
}

export default App
