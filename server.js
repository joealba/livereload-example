const express = require("express");
const path = require('path');
const app = express();
const http = require("http");
const reload = require("reload");

const server = http.createServer(app);
const PORT = 4000;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

server.listen(PORT, () => console.log("started"));
reload(app);

