const express = require('express');
const dotenv = require('dotenv');

//env variables
dotenv.config();

const app = express();

//routes
app.get('/', (req, res) => {
  res.send('Hello!! From Hack IT server..');
});

//server
app.listen(process.env.PORT, () => {
  console.log(`Server Up and Running 🚀🚀 on PORT: ${process.env.PORT}`);
});
