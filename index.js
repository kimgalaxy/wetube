const express = require("express");
const app = express();

const PORT = 4000;

function handleLitening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleLitening);
