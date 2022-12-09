require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express();
require('./db/conn');

const port = process.env.PORT;
app.use(cors());

const url = process.env.DATABASE_URI;



  app.listen(port, () => {
    console.log('listening on port ' + port)
  });


