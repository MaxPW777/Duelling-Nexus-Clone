import "../styles/Deck.css"
import MainDeck from "./MainDeck"
import ExtraDeck from "./ExtraDeck"
import CarteDeck from "../../../interfaces/carteDeck";

interface DeckProps {
  cartes: CarteDeck[];
}

function Deck({cartes}: DeckProps) {
  return (
    <div className="Deck">
        <MainDeck cartes={cartes} />
        <ExtraDeck />
    </div>
  )
}

export default Deck