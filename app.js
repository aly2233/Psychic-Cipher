const express = require("express");

const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const passport = require('passport');
require("./models/Card")
const users = require("./routes/api/users");
const cards = require("./routes/api/cards");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));


  const posts = require('./routes/api/posts')

app.use(passport.initialize());
require('./config/passport')(passport);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.use("/api/posts", posts);
app.use("/api/cards", cards);


app.listen(port, () => console.log(`Server is running on port ${port}`));