const express = require("express");
const helmet = require("helmet");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const chickensRoutes = require("./routes/chickens");

const MY_APP_USER = process.env.APP_USER;
const MY_APP_SECRET = process.env.APP_SECRET;
const app = express();
app.use(helmet());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://${MY_APP_USER}:${MY_APP_SECRET}@chicken-db.kaudogb.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use("/chicken", chickensRoutes);

module.exports = app;
