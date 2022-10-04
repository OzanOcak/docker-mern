import express, { json } from "express";

const PORT = 8000;

const app = express();

app.get("/", (req, res) => {
  res.json("docker rocks!!!");
});

app.listen(PORT, () => {
  console.log(`listening port ${PORT}`);
});
