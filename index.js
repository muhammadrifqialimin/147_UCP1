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

app.post("/hotel", async (req, res) => {
  const data = req.body;
  try {
    const hotel = await db.hotel.create(data);
    res.send(hotel);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get("/hotel", async (req, res) => {
  try {
    const hotel = await db.hotel.findAll();
    res.send(hotel);
  } catch (error) {
    res.send({ message: error.message });
  }
});

app.put("/hotel/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const hotel = await db.hotel.findByPk(id);
    if (!hotel) {
      res.status(404).send({ message: "hotel not found" });
    }
    await hotel.update(data);
    res.send({ message: "hotel berhasil di update" });
  } catch (error) {
    res.send({ message: error.message });
  }
});

app.delete("/hotel/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const hotel = await db.hotel.findByPk(id);
    if (!hotel) {
      res.status(404).send({ message: "hotel not found" });
    }
    await hotel.destroy();
    res.send({ message: "hotel berhasil dihapus" });
  } catch (error) {
    res.status(500).send(err);
  }
});
