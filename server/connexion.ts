import express from 'express';
import { createPool, format } from 'mysql';
import cors from 'cors';

const app = express();
const port = 3001;

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'prison',
};

const pool = createPool(dbConfig);

// Enable CORS using the cors middleware
app.use(cors());

// Handle GET requests for a specific table row by ID
app.get('/:tableName/:id', (req, res) => {
  const { tableName, id } = req.params;

  const sqlQuery = 'SELECT * FROM ?? WHERE ID_' + tableName + ' = ?';
  const sqlParams = [tableName, id];
  const formattedQuery = format(sqlQuery, sqlParams);

  pool.query(formattedQuery, (err, results) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      return res.status(500).json({ error: 'An error occurred while executing the SQL query' });
    }
    res.json(results);
  });
});

// Handle GET requests for the entire table
app.get('/:tableName', (req, res) => {
  const { tableName } = req.params;
  if (tableName === 'prisonnier') {
      const searchTermNom = req.query.nom; // Récupérez le terme de recherche depuis l'URL
      const searchTermPrenom = req.query.prenom; // Récupérez le terme de recherche depuis l'URL
      let sqlQuery = 'SELECT * FROM prisonnier';
      if (req.query.nom !== undefined && searchTermNom) {
        // Si un terme de recherche est fourni, modifiez la requête pour filtrer les noms
        sqlQuery = `SELECT * FROM prisonnier WHERE Nom LIKE '%${searchTermNom}%'`;
      } else if (req.query.prenom !== undefined && searchTermPrenom) {
        sqlQuery = `SELECT * FROM prisonnier WHERE Prenom LIKE '%${searchTermPrenom}%'`;
      }
    // Exécutez la requête SQL
    // Assurez-vous d'adapter cela à votre bibliothèque de base de données
    pool.query(sqlQuery, (err, results) => {
      if (err) {
        console.error('Erreur lors de la requête SQL :', err);
        res.status(500).json({ error: 'Erreur lors de la récupération des données' });
      } else {
        res.json(results);
      }
    });
  } else {
    const sqlQuery = 'SELECT * FROM ??';
    const sqlParams = [tableName];
    const formattedQuery = format(sqlQuery, sqlParams);

    pool.query(formattedQuery, (err, results) => {
      if (err) {
        console.error('Error executing SQL query:', err);
        return res.status(500).json({ error: 'An error occurred while executing the SQL query' });
      }
      res.json(results);
    });
  }
});


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});