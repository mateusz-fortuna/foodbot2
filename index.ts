import express from "express";
import path from "path";

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/public/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
