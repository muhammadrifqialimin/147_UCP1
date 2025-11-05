const express = require("express");
const app = express();
const port = 3001;
const db = require("./models");
const hotel = require("./models/hotel");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server starsted on port 3001`);
});
db.sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server Started");
    });
  })
  .catch((err) => {
    console.log(err);
  });
