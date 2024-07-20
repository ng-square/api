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

app.get("/api/tennis/legends", (req, res) => {
  res.json([
    {
      firstName: "Roger",
      lastName: "Federer",
      nationality: "Swiss",
      grandSlamWins: 20,
    },
    {
      firstName: "Rafael",
      lastName: "Nadal",
      nationality: "Spanish",
      grandSlamWins: 22,
    },
    {
      firstName: "Novak",
      lastName: "Djokovic",
      nationality: "Serbian",
      grandSlamWins: 24,
    },
    {
      firstName: "Pete",
      lastName: "Sampras",
      nationality: "American",
      grandSlamWins: 14,
    },
    {
      firstName: "Bjorn",
      lastName: "Borg",
      nationality: "Swedish",
      grandSlamWins: 11,
    },
    {
      firstName: "Rod",
      lastName: "Laver",
      nationality: "Australian",
      grandSlamWins: 11,
    },
    {
      firstName: "Andre",
      lastName: "Agassi",
      nationality: "American",
      grandSlamWins: 8,
    },
    {
      firstName: "Jimmy",
      lastName: "Connors",
      nationality: "American",
      grandSlamWins: 8,
    },
    {
      firstName: "Ivan",
      lastName: "Lendl",
      nationality: "Czech-American",
      grandSlamWins: 8,
    },
    {
      firstName: "John",
      lastName: "McEnroe",
      nationality: "American",
      grandSlamWins: 7,
    },
  ]);
});

app.listen(process.env.PORT || 3000);

module.exports = app;
