const app = require("./app");

const dotenv = require("dotenv");
dotenv.config();

const MY_PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(MY_PORT, () => {
  console.log(`Example app listening on port ${MY_PORT}`);
});
