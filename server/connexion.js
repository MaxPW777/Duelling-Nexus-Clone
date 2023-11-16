import express from 'express';
import { createPool, format } from 'mysql';
import cors from 'cors';

const app = express();
const port = 3001;

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'prisongame',
};

const pool = createPool(dbConfig);

// Enable CORS using the cors middleware
app.use(cors());

app.get('/', (req, res) => {
  pool.query('SELECT * FROM cartes', (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.get('/deck/:id', (req, res) => {
  const id = req.params.id;
  pool.query(`SELECT
  cartes.ID AS ID,
  cartes.Nom AS Nom,
  cartes.Type AS Type,
  cartes.Def AS Def,
  cartes.Atk AS Atk,
  cartes.Image AS Image,
  cartes.Description AS Description,
  cartes.Rareté AS Rareté,
  cartes_deck.CarteQuantité AS Quantite,
  decks.ID_deck AS DeckID,
  decks.Nom_Deck AS DeckNom,
  decks.Description_deck AS DeckDescription
FROM
  cartes_deck
JOIN
  cartes ON cartes_deck.CarteID = cartes.ID
JOIN
  decks ON cartes_deck.DeckID = decks.ID_deck
WHERE
  decks.ID_deck = ${id};`, (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});