import "../styles/Deck.css"
import MainDeck from "./MainDeck"
import ExtraDeck from "./ExtraDeck"


function Deck() {
  return (
    <div className="Deck">
        <MainDeck />
        <ExtraDeck />
    </div>
  )
}

export default Deck