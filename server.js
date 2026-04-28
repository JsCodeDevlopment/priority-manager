const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://trello.com");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`🎯 Priority Manager rodando em http://localhost:${PORT}`);
  console.log(
    `📝 Para testar no Trello, use ngrok ou outra ferramenta de túnel`,
  );
  console.log(`   Exemplo: npx ngrok http ${PORT}`);
});
