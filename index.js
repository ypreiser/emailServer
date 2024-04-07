require('dotenv').config();
const express = require('express');
const cors = require('cors');

// const xss = require("xss");
// const html = xss('<script>alert("xss");</script>');
// console.log(html);

const PORT = 2501
const db = require('./DL/db')

const app = express();
db.connect();
app.use(cors());
app.use(express.json());
const {auth} = require('./middlewares/auth')
app.all('*', auth)

app.use('/chat',require('./routers/chat.router'))


app.listen(PORT, () => console.log(`****server is listening on ${PORT}****`))