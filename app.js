const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

  const app = express();

  const posts = require('./routes/api/posts')

const port = process.env.PORT || 4000;

app.use("/api/posts", posts);

app.listen(port, () => console.log(`Server is running on port ${port}`));