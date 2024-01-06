const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.static("public"));

app.get("/api/pizza", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Margherita",
      description: "Tomato sauce, mozzarella, organic oregano",
      price: 16,
      image: "src/app/assets/Margherita.jpeg",
    },
    {
      id: 2,
      name: "Stromboli",
      description:
        "Tomato sauce, mozzarella, fresh chillies, olives, organic oregano",
      price: 18,
      image: "src/app/assets/Margherita.jpeg",
    },
    {
      id: 3,
      name: "Napoli",
      description:
        "Tomato sauce, mozzarella, anchovies MSC, capers, organic oregano",
      price: 19,
      image: "src/app/assets/Margherita.jpeg",
    },
    {
      id: 4,
      name: "Funghi",
      description: "Tomato sauce, mozzarella, fresh mushrooms, organic oregano",
      price: 20,
      image: "src/app/assets/Margherita.jpeg",
    },
  ]);
});

app.post("/api/pizza", (req, res) => {
  res.status(200).send();
});

app.listen(process.env.PORT || 3000);

module.exports = app;
