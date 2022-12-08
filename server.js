require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

app.listen(port, () => {
  console.log('listening on port ' + port)
});