require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = 2501


const db = require('./db')

const app = express();
db.connect();

app.use(cors());
app.use(express.json());

// require('./testData')

app.listen(PORT, () => console.log(`****server is listening on ${PORT}****`))