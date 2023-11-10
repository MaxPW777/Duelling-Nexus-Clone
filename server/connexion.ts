import express from 'express';
import { createPool, format } from 'mysql';
import cors from 'cors';

const app = express();
const port = 3001;

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'prisonGame',
};

const pool = createPool(dbConfig);

// Enable CORS using the cors middleware
app.use(cors());



app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});