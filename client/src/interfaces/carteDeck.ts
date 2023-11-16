import Carte from "./carte";

export default interface CarteDeck extends Carte {
    Quantite: number;
    DeckID: number;
    DeckNom: string;
    DeckDescription: string;
}