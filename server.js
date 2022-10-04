import express, { json } from "express";
import { MongoClient } from "mongodb";

const PORT = 4000;
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName = "testDB";

async function main() {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("documents");

  return;
}

const app = express();

app.get("/", (req, res) => {
  res.json("docker rocks!!!");
});

app.listen(PORT, () => {
  console.log(`listening port ${PORT}`);
});
