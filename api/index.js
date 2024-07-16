const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.static("public"));

app.get("/api/players", (req, res) => {
  res.json([
    {
      id: 936851900,
      lastName: "Wawrinka",
      firstName: "Stan",
      points: 16596,
      classification: "N1"
    },
    {
      id: 868023470,
      lastName: "Stricker",
      firstName: "Dominic",
      points: 16324,
      classification: "N1"
    },
    {
      id: 743021270,
      lastName: "Riedi",
      firstName: "Leandro",
      points: 15529,
      classification: "N1"
    },
    {
      id: 497962860,
      lastName: "Hüsler",
      firstName: "Marc-Andrea",
      points: 15427,
      classification: "N1"
    }
  ]);
});

app.post("/api/players", (req, res) => {
  res.status(200).send();
});

app.listen(process.env.PORT || 3000);

module.exports = app;
