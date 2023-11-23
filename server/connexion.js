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
app.use(express.json());

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
app.post('/login', (req, res) => {
  const userData = req.body.user;

  if (!userData || !userData.username) {
      res.status(400).json({ success: false, message: 'Données utilisateur manquantes' });
      return;
  }

  const user = userData.username;

  pool.query('SELECT * FROM joueurs WHERE NOM = ?', [user], (error, results) => {
      if (error) {
          console.error(error);
          res.status(500).send('Erreur interne du serveur');
          return;
      }
      if (results.length > 0) {
          // L'utilisateur existe dans la base de données
          res.json({ success: true, user: results[0] });
      } else {
          // L'utilisateur n'existe pas dans la base de données
          res.json({ success: false, message: 'Utilisateur non trouvé' });
      }
  });
});


  
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});