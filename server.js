const express = require('express');
const path = require('path');
const server = express();

server.use(express.static(path.join(__dirname, 'build')));

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

server.listen(process.env.PORT || 8080, () => {
  console.log('I am now listen on the available port');
});
